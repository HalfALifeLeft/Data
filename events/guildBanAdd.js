/* eslint-disable no-undef */
module.exports = (client, guild, user) => {
	// NEVER have client.on inside of a event or command, it FUCKS it up
	const mychannel = client.channels.find(channel => channel.name === "mod-events")
	if (!mychannel) return;
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setTimestamp()
		.setColor(process.env.ERROR)
		.addField('Member was banned',`${user.username}#${user.discriminator} (${user.id})`);
	mychannel.send(embed);
};