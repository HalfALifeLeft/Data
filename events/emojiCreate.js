/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = (client, emoji) => {
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