exports.run = (client, message, func) => {
        const { Client, RichEmbed } = require('discord.js');
            const embed = new RichEmbed()
                .setColor(0xf2c300)
                .setDescription(`Ready captain! ${Math.round(client.ping)} ms`)
            return message.channel.send({embed})
//    message.reply("Ready captain! " + Math.round(client.ping) + "ms").catch(console.error);
};