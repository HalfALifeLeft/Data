/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, member) => {
	// NEVER have client.on inside of a event or command, it FUCKS it up
	const mychannel = client.channels.find(channel => channel.name === `member-events`);
	if (!mychannel) return;
	console.log(`User "${member.user.username}" has left "${member.guild.name}"` );
	const { Client, RichEmbed } = require(`discord.js`);
	const embed = new RichEmbed()
		.setTimestamp()
		.setColor(process.env.ERROR)
		.addField(`Member left`,`${member.user.username}#${member.user.discriminator} (${member.user.id})`);
	mychannel.send(embed);
};