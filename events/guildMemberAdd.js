module.exports = (client, member) => {
    // NEVER have client.on inside of a event or command, it FUCKS it up
      console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
      var role = member.guild.roles.find('name', 'Members')
      // Do nothing if the channel wasn't found on this server
      if (!channel1 && channel2) return;
      // Send the message, mentioning the member
      client.channels.get("504724131170746371").send(`Welcome to the server, ${member}`);
      const { Client, RichEmbed } = require('discord.js');
      const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField("Member joined",`${member.user.username}#${member.user.discriminator} (${member.user.id})`)
        client.channels.get("506539036765061150").send(embed);
      member.addRole(role)
  };