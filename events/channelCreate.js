/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = (client, Channel) => {
//	if (client.channels.type("dm")) return;
	// NEVER have client.on inside of a event or command, it FUCKS it up
	const mychannel = client.channels.find(channel => channel.name === "server-events")
	console.log(`${Channel} was created` );
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setTimestamp()
		.setColor(process.env.GOOD)
		.addField('Channel Created',`${Channel}`);
	mychannel.send(embed);
};