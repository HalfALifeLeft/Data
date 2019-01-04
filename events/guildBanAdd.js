module.exports = (client, member) => {
	// NEVER have client.on inside of a event or command, it FUCKS it up
	const channel = client.channels.find(ch => ch.name === 'mod-events');
	if (!channel) return;
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setTimestamp()
		.setColor(process.env.ERROR)
		.addField('Member was banned',`${member.user.username}#${member.user.discriminator} (${member.user.id})`);
	channel.send(embed);
};