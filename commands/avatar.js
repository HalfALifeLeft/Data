/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    let Avatar = message.mentions.users.first();
    if (message.mentions.everyone === true) return message.reply(`You cannot tag everyone with this command!`);
    if (!message.mentions.users.first()) {
        Avatar = message.author;
    }
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setImage(Avatar.avatarURL);
    message.channel.send({embed});
};