module.exports = (client, message) => {
    if (message.author.bot) return;
    const { Client, RichEmbed } = require('discord.js');
    const embed = new RichEmbed()
    .setTitle("Message Removed")
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
    .setTimestamp()
    .setColor(process.env.ERROR)
    .addField("Author",`${message.author.username}\n(${message.author.id})`, true)
    .addField("Channel",`${message.channel}\n(${message.channel.id})`, true)
    .addBlankField(true)
    .addField("Message",`${message.content}`)
client.channels.get("506539037339811866").send(embed);
};