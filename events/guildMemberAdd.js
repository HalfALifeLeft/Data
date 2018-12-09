module.exports = (client, member) => {
    // NEVER have client.on inside of a event or command, it FUCKS it up
      console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
      const channel1 = member.guild.channels.find(ch => ch.name === 'general');
      const channel2 = member.guild.channels.find(ch => ch.name === 'member-events');
      var role = member.guild.roles.find('name', 'Members')
      // Do nothing if the channel wasn't found on this server
      if (!channel1 && channel2) return;
      // Send the message, mentioning the member
      channel1.send(`Welcome to the server, ${member}`);
      const { Client, RichEmbed } = require('discord.js');
      const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField("Member joined",`${member.user.username} (${member.user.id})`)
      channel2.send(embed);
      member.addRole(role)
  };