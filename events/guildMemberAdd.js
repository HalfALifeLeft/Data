module.exports = (client, member) => {
    client.on("guildMemberAdd", (member) => {
      console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
      const channel = member.guild.channels.find(ch => ch.name === 'data-testing-general');
      // Do nothing if the channel wasn't found on this server
      if (!channel) return;
      // Send the message, mentioning the member
      channel.send(`Welcome to the server, ${member}`);
    });
  };