/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = async (client, message) => {

    client.dataConfig.ensure(`${message.guild.id}`, {
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

    const channelId = client.dataConfig.get(`${message.guild.id}`, `messageLogs`);
    if (message.guild.channels.has(channelId) == false) return;

    const mychannel = message.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);

    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField(`Reactions Cleared From Message`, `${message.reactions.length} reactions\nMessage ID:(\`${message.id}\`)`)
        .setFooter(`#${message.channel.name}`);
    mychannel.send(embed);
};