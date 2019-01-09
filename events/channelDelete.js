/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = (client, Channel) => {
	// NEVER have client.on inside of a event or command, it FUCKS it up
	const mychannel = client.channels.find(channel => channel.name === `server-events`);
	if (!mychannel) return;
	console.log(`${Channel} was deleted` );
	const { Client, RichEmbed } = require(`discord.js`);
	const embed = new RichEmbed()
		.setTimestamp()
		.setColor(process.env.ERROR)
		.addField(`Channel deleted`,`#${Channel.name}`);
	mychannel.send(embed);
};