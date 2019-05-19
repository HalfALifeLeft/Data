/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
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
        ruleTen: ``
    });


    const channelId = client.dataConfig.get(`${member.guild.id}`, `memberLogs`);
    if (member.guild.channels.has(channelId) == false) return;

    // NEVER have client.on inside of a event or command, it FUCKS it up
    const mychannel = member.guild.channels.find(channel => channel.id === channelId);
    if (mychannel == null) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField(`Member left`, `${member.user.username}#${member.user.discriminator} (${member.user.id})`);
    mychannel.send(embed)
    .catch(e => {
        console.error(e);
    });

    const generalId = client.dataConfig.get(`${member.guild.id}`, `welcomeChannel`);
    if (member.guild.channels.has(generalId) == false) return;

    const general = member.guild.channels.find(channel => channel.id === generalId);

    if (general == null) return;
    general.send(`${member.user.tag}s dead, Jim.`)
    .catch(e => {
        console.error(e);
    });
};