/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, message, oldMessage) => {
    if (message.author.bot) return;
    const mychannel = client.channels.find(channel => channel.name === `message-events`);
    if (!mychannel) return;
    let content = message.content;
    if (content.length > 1024) return;
    const newMessage = message.content;
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setAuthor(message.author.username + `#` + message.author.discriminator, message.author.avatarURL)
        .setTimestamp()
        .setColor(process.env.HEXCODE)
        .addField(`Old Message`,`${newMessage}`, true)
        .addField(`New Message`,`${oldMessage}`, true)
        .setFooter(`#${message.channel.name}`);
    mychannel.send(embed);
};