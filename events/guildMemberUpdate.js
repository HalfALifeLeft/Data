/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = async (client, oldMember, newMember) => {
  
        client.dataConfig.ensure(`${newMember.guild.id}`, {
        prefix: `d!`, 
        mutedRole: ``,
        messageLogs: ``,
        memberLogs: ``,
        serverLogs: ``,
        modLogs: ``,
        welcomeChannel: ``,
        ruleOne: ``,
        ruleTwo: ``,
        ruleThree: ``,
        ruleFour: ``,
        ruleFive: ``,
        ruleSix: ``,
        ruleSeven: ``,
        ruleEight: ``,
        ruleNine: ``,
        ruleTen: ``});
  
    const channelId = client.dataConfig.get(`${newMember.guild.id}`, `memberLogs`);
    if (newMember.guild.channels.has(channelId) == false) return;

    // NEVER have client.on inside of a event or command, it FUCKS it up
    const mychannel = newMember.guild.channels.find(channel => channel.id === channelId);
    if (mychannel == null) return;

    let oldRolesArray = oldMember.roles;
    let newRolesArray = newMember.roles;
    let oldRoles = [];
    let newRoles = [];
    let removedRoles = [];
    let addedRoles = [];

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Member Updated`, `<@${newMember.user.id}> (\`${newMember.user.id}\`)`)
        .setFooter(`Guild ID: ${oldMember.guild.id}`);

    oldRolesArray.forEach((r) => {
        oldRoles.push(r.id);
    });

    newRolesArray.forEach((r) => {
        newRoles.push(r.id);
    });

    //removed
    if(oldRoles.length > newRoles.length) {
        for(var dataOne in oldRoles) {
            if(!newRoles.includes(oldRoles[dataOne])) {
                removedRoles.push(oldRoles[dataOne]);
            }
        }
        embed.addField(`Role Removed`, `<@&${removedRoles}>`);
    }

    //added
    if(oldRoles.length < newRoles.length) {
        for(var dataTwo in newRoles) {
            if(!oldRoles.includes(newRoles[dataTwo])) {
                addedRoles.push(newRoles[dataTwo]);
            }
        }
        embed.addField(`Role Added`, `<@&${addedRoles}>`);
    }

    if(newMember.nickname != oldMember.nickname) {
        let nicknameNew = newMember.nickname;
        let nicknameOld = oldMember.nickname;
        if(nicknameNew == null) {
            nicknameNew = newMember.user.username;
        }
        if(nicknameOld == null) {
            nicknameOld = oldMember.user.username;
        }
        embed.addField(`Old Nickname`, `\`${nicknameOld}\``);
        embed.addField(`New Nickname`, `\`${nicknameNew}\``);
    }

    mychannel.send(embed);
};