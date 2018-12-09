module.exports = (client, Channel) => {
    // NEVER have client.on inside of a event or command, it FUCKS it up
      console.log(`${Channel} was deleted` );
      const { Client, RichEmbed } = require('discord.js');
      const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField("Channel deleted",`#${Channel.name}`)
        client.channels.get("506539037989928970").send(embed);
  };