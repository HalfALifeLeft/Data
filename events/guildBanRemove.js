/* eslint-disable no-undef */
module.exports = (client, GuildMember) => {
	// NEVER have client.on inside of a event or command, it FUCKS it up
	const mychannel = client.channels.find(channel => channel.name === "member-events")
	if (!mychannel) return;
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setTimestamp()
		.setColor(process.env.GOOD)
		.addField('Member was banned',`${GuildMember.user.username}#${GuildMember.user.discriminator} (${GuildMember.user.id})`);
	mychannel.send(embed);
};