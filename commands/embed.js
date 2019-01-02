/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args ) => {
    //Check if the bot owner is the author
	if (client.id !== client.ownerID) return message.channel.send('**You lack the required permissions to use this command.**');
	//if owner isnt the one sending the message it replies with no perms
	let color = args[0];
	let content = args.slice(2).join(" ");
	console.log(args[0])
	console.log(args.slice(2).join(" "))
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()	
		.setColor(`${color}`)
		.setDescription(`${content}`)
	return message.channel.send({embed});
};