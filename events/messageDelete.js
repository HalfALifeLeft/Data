module.exports = (client, message) => {
	if (message.author.bot) return;
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setAuthor(message.author.username + '#' + message.author.discriminator, message.author.avatarURL)
		.setTimestamp()
		.setColor(process.env.ERROR)
		.addField('Message',`${message.content}`)
		.setFooter(`#${message.channel.name}`);
	client.channels.get('506539037339811866').send(embed);
};