/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = (client, oldEmoji, newEmoji) => {
    const channelId = client.dataConfig.get(`${oldEmoji.guild.id}`, `serverLogs`);
    if (oldEmoji.guild.channels.has(channelId) == false) return;

    const mychannel = oldEmoji.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Old Emoji`, `\`${oldEmoji.name}\` <:${oldEmoji.name}:${oldEmoji.id}> (\`${oldEmoji.id}\`)`)
        .addField(`New Emoji`, `\`${newEmoji.name}\` <:${newEmoji.name}:${newEmoji.id}> (\`${newEmoji.id}\`)`);
    mychannel.send(embed);
};