/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = async (client, oldChannel, newChannel) => {
  
              client.dataConfig.ensure(`${oldChannel.guild.id}`, {
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
  
    const channelId = client.dataConfig.get(`${oldChannel.guild.id}`, `serverLogs`);
    let topicOld = oldChannel.topic;
    let topicNew = newChannel.topic;
    if (oldChannel.guild.channels.has(channelId) == false) return;

    const mychannel = oldChannel.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;

    if(oldChannel == newChannel) return;

    if(oldChannel.name == newChannel.name && oldChannel.parentID == newChannel.parentID && oldChannel.permissionOverwrites == newChannel.permissionOverwrites && oldChannel.topic == newChannel.topic && oldChannel.nsfw == newChannel.nsfw) return;

    if(topicOld == ``) {
        topicOld = `Nothing`;
    }

    if(topicNew == ``) {
        topicNew = `Nothing`;
    }

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Channel Updated`, `<#${oldChannel.id}> (\`${oldChannel.id}\`)`)
        .addField(`Old Channel Details`, `Name: ${oldChannel.name}\nCategory: ${oldChannel.parent.name}\nChannel Topic: ${topicOld}\nNSFW: ${oldChannel.nsfw}`)
        .addField(`Old Channel Details`, `Name: ${newChannel.name}\nCategory: ${newChannel.parent.name}\nChannel Topic: ${topicNew}\nNSFW: ${newChannel.nsfw}`);
    mychannel.send(embed);
};