exports.run = (client, message, args,  func) => { 
    const { Client, RichEmbed } = require('discord.js');
      const randomPuppy = require('random-puppy');
      var subreddit = args[0]
      if (!subreddit) return message.reply(`Captain, that does not compute!`); //shorter plus you had the return on the wrong place
        randomPuppy(`${subreddit}`)
                .then(url => {
                    const embed = new RichEmbed()
                        .setFooter(`/r/${subreddit}`)
                        .setImage(url)
                        .setColor(func.dataHexcode())
                    return message.channel.send({ embed })
                })
      }