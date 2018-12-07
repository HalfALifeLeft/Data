module.exports = (client, member, message) => {
    // NEVER have client.on inside of a event or command, it FUCKS it up
      const channel = member.guild.channels.find(ch => ch.name === 'message-events');
      // Do nothing if the channel wasn't found on this server
      if (!channel) return;
      // Send the message, mentioning the member
      channel.send(`The message: "${message.content}" by ${message.author.tag} was deleted.`);
  };