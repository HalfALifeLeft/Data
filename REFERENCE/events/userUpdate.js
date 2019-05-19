/* eslint-disable no-console */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, oldUser, newUser) => {

  return;

  console.log(client.fetchUser(newUser.id));
  console.log(newUser.lastMessage);

  //const channelId = client.dataConfig.get(`${.guild.id}`, `memberLogs`);
  //if (client.message.guild.channels.has(channelId) == false) return;

  //const mychannel = client.channels.find(channel => channel.id === channelId);
  //if (!mychannel) return;

  const {
    Client,
    RichEmbed
  } = require(`discord.js`);
  const embed = new RichEmbed()
    .setTimestamp()
    .setColor(process.env.GOOD)
    .addField(`Old Member Username`, `${oldUser.username}#${oldUser.discriminator} (${oldUser.id})`)
    .addField(`New Member Username`, `${newUser.user.username}#${newUser.user.discriminator} (${newUser.user.id})`);
  //mychannel.send(embed);
};

/*

User {
  id: '444384280152637441',
  username: 'Half',
  discriminator: '3423',
  avatar: 'b6e056b7faf9aa3f38843d7e6a43d1a9',
  bot: false,
  lastMessageID: null,
  lastMessage: null }

*/