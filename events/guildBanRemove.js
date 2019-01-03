/* eslint-disable no-undef */
module.exports = (client, member) => {
	// NEVER have client.on inside of a event or command, it FUCKS it up
	const mychannel = client.channels.find(channel => channel.name === "member-events")
	console.log(`User "${member.user.username}" was unbanned in "${member.guild.name}"` );
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setTimestamp()
		.setColor(process.env.GOOD)
		.addField('Member was unbanned',`${member.user.username}#${member.user.discriminator} (${member.user.id})`);
	mychannel.send(embed);
};