/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = (client, role) => {

  client.dataConfig.ensure(`${role.guild.id}`, {
    prefix: `d!`,
    mutedRole: ``,
    messageLogs: ``,
    memberLogs: ``,
    serverLogs: ``,
    modLogs: ``,
    welcomeChannel: ``,
    ruleOne: ``,
    ruleTwo: ``,
    ruleThree: ``,
    ruleFour: ``,
    ruleFive: ``,
    ruleSix: ``,
    ruleSeven: ``,
    ruleEight: ``,
    ruleNine: ``,
    ruleTen: ``
  });

  const channelId = client.dataConfig.get(`${role.guild.id}`, `serverLogs`);
  if (role.guild.channels.has(channelId) == false) return;

  const mychannel = role.guild.channels.find(channel => channel.id === channelId);
  if (!mychannel) return;

  const {
    Client,
    RichEmbed
  } = require(`discord.js`);
  const embed = new RichEmbed()
    .setTimestamp()
    .setColor(process.env.ERROR)
    .addField(`Role Deleted`, `@${role.name} (\`${role.id}\`)`);
  mychannel.send(embed);
};

/*

Role {
  id: '557760402654756864',
  name: 'testing1',
  color: 0,
  hoist: false,
  position: 1,
  permissions: 104324161,
  managed: false,
  mentionable: false }

*/