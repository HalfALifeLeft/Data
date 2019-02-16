/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, message) => {
    if (message.author.bot) return;
    const mychannel = message.guild.channels.find(channel => channel.name === `message-events`);
    if (!mychannel) return;
    let content = message.content;
    if (content.length > 1024) return;
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setAuthor(message.author.username + `#` + message.author.discriminator, message.author.avatarURL)
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField(`Message`,`${message.content}`)
        .setFooter(`#${message.channel.name}`);
    mychannel.send(embed);
};