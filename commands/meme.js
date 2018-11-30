exports.run = (client, message, args) => { 
const { Client, RichEmbed } = require('discord.js');
  const randomPuppy = require('random-puppy');
    randomPuppy('memes')
            .then(url => {
                const embed = new RichEmbed()
                    .setFooter(`/r/memes`)
                    .setDescription(`:joy: [memes are life](${url})`)
                    .setImage(url)
                    .setColor(DataHexcode)
                return message.channel.send({ embed })
            })
  }