exports.run = (client, message, args) => { 
const { Client, RichEmbed } = require('discord.js');
  const randomPuppy = require('random-puppy');
    randomPuppy('memes')
            .then(url => {
                const embed = new RichEmbed()
                    .setFooter(`/r/memes`)
                    .setDescription(`:joy: [memes are life](${url})`)
                    .setImage(url)
                    .setColor('0xe6e600')
                return message.channel.send({ embed })
            })
  }