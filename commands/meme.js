exports.run = (client, message, args,  func) => { 
const { Client, RichEmbed } = require('discord.js');
  const randomPuppy = require('random-puppy');
    randomPuppy('memes')
            .then(url => {
                const embed = new RichEmbed()
                    .setFooter(`/r/memes`)
                    .setDescription(`:joy: [memes are life](${url})`)
                    .setImage(url)
                    .setColor(0xf2c300)
                return message.channel.send({ embed })
            })
  }