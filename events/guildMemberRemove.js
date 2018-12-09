module.exports = (client, member) => {
    // NEVER have client.on inside of a event or command, it FUCKS it up
      console.log(`User "${member.user.username}" has left "${member.guild.name}"` );
      const { Client, RichEmbed } = require('discord.js');
      const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField("Member left",`${member.user.username}#${member.user.discriminator} (${member.user.id})`)
        client.channels.get("506539036765061150").send(embed);;
  };