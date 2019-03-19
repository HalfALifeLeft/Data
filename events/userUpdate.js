/* eslint-disable no-console */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, oldUser, newUser) => {
    
    return;

    console.log(oldUser);
    console.log(`------`);
    console.log(newUser);
    console.log(`------`);

    const channelId = client.dataConfig.get(`${oldUser.guild.id}`, `memberLogs`);
    if (oldUser.guild.channels.has(channelId) == false) return;

    const mychannel = client.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Old Member Username`, `${oldUser.username}#${oldUser.discriminator} (${oldUser.id})`)
        .addField(`New Member Username`, `${newUser.username}#${newUser.discriminator} (${newUser.id})`);
    mychannel.send(embed);
};