/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, message) => {
    const channelId = client.dataConfig.get(`${message.guild.id}`, `messageLogs`);
    if (message.guild.channels.has(channelId) == false) return;

    if (message.author.bot) return;
    const mychannel = message.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;
    let content = message.content;
    if (content.length > 1024) return;
    if (content.length == 0) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setAuthor(message.author.username + `#` + message.author.discriminator, message.author.avatarURL)
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField(`Message`, `\`\`\`${message.content}\`\`\``)
        .setFooter(`#${message.channel.name}`);
    mychannel.send(embed);
};