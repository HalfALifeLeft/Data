/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, oldUser, newUser) => {
    const channelId = client.dataConfig.get(`${message.guild.id}`, `memberLogs`);
    if (message.guild.channels.has(channelId) == false) return;

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