/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    if(!args[0]) return message.reply(`you need to ask a question for the 8ball to answer!`);
    const eightball = require(`8ball`)();
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setTitle(`${eightball}`);
    message.channel.send({embed});
};