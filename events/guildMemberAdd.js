/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = (client, member) => {
  
            client.dataConfig.ensure(`${member.guild.id}`, {
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

  
    var role = member.guild.roles.find(role => role.name === `Members`);
    if (role == null) return;
    member.addRole(role);

    const channelId = client.dataConfig.get(`${member.guild.id}`, `memberLogs`);
    if (member.guild.channels.has(channelId) == false) return;

    const mychannel = member.guild.channels.find(channel => channel.id === channelId);

    if (mychannel == null) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Member joined`, `${member.user.username}#${member.user.discriminator} (${member.user.id})`);
    mychannel.send(embed);

    const generalId = client.dataConfig.get(`${member.guild.id}`, `welcomeChannel`);
    if (member.guild.channels.has(generalId) == false) return;

    const general = member.guild.channels.find(channel => channel.id === generalId);

    if (general == null) return;
    general.send(`<@${member.id}> has joined the server!`);
};