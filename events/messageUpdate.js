module.exports = (client, message, oldMessage) => {
	if (message.author.bot) return;
	const newMessage = message.content;
	const { Client, RichEmbed } = require('discord.js');
	const embed = new RichEmbed()
		.setAuthor(message.author.username + '#' + message.author.discriminator, message.author.avatarURL)
		.setTimestamp()
		.setColor(process.env.HEXCODE)
		.addField('Old Message',`${newMessage}`, true)
		.addField('New Message',`${oldMessage}`, true)
		.setFooter(`#${message.channel.name}`);
	client.channels.get('506539037339811866').send(embed);
};