module.exports = (client, member) => {
	// NEVER have client.on inside of a event or command, it FUCKS it up
	const mychannel = client.channels.find(channel => channel.name === "member-events")
	if (!mychannel) return;
	console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
	var role = member.guild.roles.find('name', 'Members');
	// Send the message, mentioning the member
	client.channels.get('504724131170746371').send(`Welcome to the server, ${member}`);
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setTimestamp()
		.setColor(process.env.GOOD)
		.addField('Member joined',`${member.user.username}#${member.user.discriminator} (${member.user.id})`);
	mychannel.send(embed);
	member.addRole(role);
};