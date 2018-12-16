exports.run = (client, message, args,  func) => { 
	const { Client, RichEmbed } = require('discord.js');
	const randomPuppy = require('random-puppy');
	randomPuppy('cats')
		.then(url => {
			const embed = new RichEmbed()
				.setFooter('/r/cats')
				.setDescription('Meow meow mothermeowers')
				.setImage(url)
				.setColor(process.env.HEXCODE);
			return message.channel.send({ embed });
		});
};