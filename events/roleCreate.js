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
        ruleTen: ``});

    const channelId = client.dataConfig.get(`${role.guild.id}`, `serverLogs`);
    if (role.guild.channels.has(channelId) == false) return;

    const mychannel = role.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;

    let color = ``;
    if(role.color == 0) {
        color = `Clear`;
    } else {
        color = role.colorl;
    }

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Role Created`, `<@&${role.id}> (\`${role.id}\`)`)
        .addField(`Role Details`, `Color: ${color}\nHoisted Role: ${role.hoist}\nManaged By Outside Service: ${role.managed}\nMentionable: ${role.mentionable}`);
    mychannel.send(embed);
};