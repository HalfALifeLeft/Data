exports.run = (client, message, args) => { 
const { Client, RichEmbed } = require('discord.js');
  const randomPuppy = require('random-puppy');
    randomPuppy('cats')
            .then(url => {
                const embed = new RichEmbed()
                    .setFooter(`/r/cats`)
                    .setDescription(`Meow meow mothermeowers`)
                    .setImage(url)
                    .setColor(DataHexcode)
                return message.channel.send({ embed })
            })
  }