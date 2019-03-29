/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = (client, Channel) => {

    if (Channel.type == `dm`) return;

    client.dataConfig.ensure(`${Channel.guild.id}`, {
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

    const channelId = client.dataConfig.get(`${Channel.guild.id}`, `serverLogs`);
    if (Channel.guild.channels.has(channelId) == false) return;

    // NEVER have client.on inside of a event or command, it FUCKS it up
    const mychannel = Channel.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Channel Created`, `#${Channel.name} (\`${Channel.id}\`)`);
    mychannel.send(embed);
};