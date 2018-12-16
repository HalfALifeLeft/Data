exports.run = (client, message, func) => {
//    console.log(client.functions.example(2, 5));
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setColor(process.env.HEXCODE)
		.setDescription(`Ready captain! ${client.functions.ping(client)} ms`);
	return message.channel.send({embed});
}; 