exports.run = (client, message, func) => {
        const { Client, RichEmbed } = require('discord.js');
            const embed = new RichEmbed()
                .setColor(func.dataHexcode())
                .addDescription(`Ready captain! ${Math.round(client.ping)} ms`)
            return message.channel.send({embed}).catch(e);
    //    message.reply("Ready captain! " + Math.round(client.ping) + "ms").catch(console.error);
}