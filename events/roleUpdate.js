/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = (client, oldRole, newRole) => {
    const channelId = client.dataConfig.get(`${oldRole.guild.id}`, `serverLogs`);
    if (oldRole.guild.channels.has(channelId) == false) return;

    const mychannel = oldRole.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;

    if(oldRole == newRole) return;

    if(oldRole.color == newRole.color && oldRole.hoist == newRole.hoist && oldRole.managed == newRole.managed && oldRole.mentionable == newRole.mentionable) return;

    let oldColor = ``;
    if(oldRole.color == 0) {
        oldColor = `Clear`;
    } else {
        oldColor = oldRole.color;
    }

    let newColor = ``;
    if(newRole.color == 0) {
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
        .addField(`Role`, `<@&${oldRole.id}> (\`${oldRole.id}\`)`)
        .addField(`Old Role Details`, `Color: ${oldColor}\nHoisted Role: ${oldRole.hoist}\nManaged By Outside Service: ${oldRole.managed}\nMentionable: ${oldRole.mentionable}`)
        .addField(`New Role Details`, `Color: ${newColor}\nHoisted Role: ${newRole.hoist}\nManaged By Outside Service: ${newRole.managed}\nMentionable: ${newRole.mentionable}`);
    mychannel.send(embed);
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