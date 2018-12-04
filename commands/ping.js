exports.run = (client, message, args, func) => {
    const { Client, RichEmbed } = require('discord.js');
    const embed = new RichEmbed()
        .setColor(func.dataHexcode())
        .addDescription(`Ready captain! ${Math.round(client.ping)} ms`)
    message.channel.send({embed})
    console.log(e);
};