module.exports = (client, message, oldMessage, newMessage) => {
    if (message.author.bot) return;
    const { Client, RichEmbed } = require('discord.js');
    const embed = new RichEmbed()
    .setTitle(`Message Edited`)
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
    .setTimestamp()
    .setColor(process.env.HEXCODE)
    .addField("Author",`${message.author.username}\n(${message.author.id})`, true)
    .addField("Channel",`${message.channel}`, true)
    .addBlankField(true)
    .addField("Old Message",`${oldMessage}`)
    .addField("New Message",`${newMessage}`)
    client.channels.get("506539037339811866").send(embed)
};