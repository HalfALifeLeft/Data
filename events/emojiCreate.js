/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = (client, emoji) => {

    client.dataConfig.ensure(`${emoji.guild.id}`, {
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

    const channelId = client.dataConfig.get(`${emoji.guild.id}`, `serverLogs`);
    if (emoji.guild.channels.has(channelId) == false) return;

    const mychannel = emoji.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Emoji Created`, `\`${emoji.name}\` <:${emoji.name}:${emoji.id}> (\`${emoji.id}\`)`);
    mychannel.send(embed);
};