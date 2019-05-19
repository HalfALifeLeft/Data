/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = (client, oldRole, newRole) => {

    client.dataConfig.ensure(`${oldRole.guild.id}`, {
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

    const channelId = client.dataConfig.get(`${oldRole.guild.id}`, `serverLogs`);
    if (oldRole.guild.channels.has(channelId) == false) return;

    const mychannel = oldRole.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;

    if (oldRole == newRole) return;

    if (oldRole.color == newRole.color && oldRole.hoist == newRole.hoist && oldRole.managed == newRole.managed && oldRole.mentionable == newRole.mentionable && oldRole.name == newRole.name) return;

    let oldColor = ``;
    if (oldRole.color == 0) {
        oldColor = `Clear`;
    } else {
        oldColor = oldRole.color;
    }

    let newColor = ``;
    if (newRole.color == 0) {
        newColor = `Clear`;
    } else {
        newColor = newRole.color;
    }

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Role Updated`, `<@&${oldRole.id}> (\`${oldRole.id}\`)`)
        .addField(`Old Role Details`, `Name: ${oldRole.name}\nColor: ${oldColor}\nHoisted Role: ${oldRole.hoist}\nManaged By Outside Service: ${oldRole.managed}\nMentionable: ${oldRole.mentionable}`)
        .addField(`New Role Details`, `Name: ${newRole.name}\nColor: ${newColor}\nHoisted Role: ${newRole.hoist}\nManaged By Outside Service: ${newRole.managed}\nMentionable: ${newRole.mentionable}`);
    mychannel.send(embed)
    .catch(e => {
        console.error(e);
    });
};

/*

Role {
  deleted: false,
  id: '557760402654756864',
  name: 'testing',
  color: 0,
  hoist: false,
  position: 1,
  permissions: 104324161,
  managed: false,
  mentionable: false }
------
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