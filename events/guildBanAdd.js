module.exports = (client, member) => {
	// NEVER have client.on inside of a event or command, it FUCKS it up
	console.log(`User "${member.user.username}" was banned in "${member.guild.name}"` );
	const channel = member.guild.channels.find(ch => ch.name === 'mod-events');
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setTimestamp()
		.setColor(process.env.ERROR)
		.addField('Member was banned',`${member.user.username}#${member.user.discriminator} (${member.user.id})`);
	client.channels.get('506539037989928970').send(embed);
};