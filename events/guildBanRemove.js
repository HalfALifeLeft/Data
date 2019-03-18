/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, guild, user) => {
    const channelId = client.dataConfig.get(`${guild.id}`, `modLogs`);
    if (guild.channels.has(channelId) == false) return;

    // NEVER have client.on inside of a event or command, it FUCKS it up
    const mychannel = guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Member was unbanned`, `${user.username}#${user.discriminator} (${user.id})`);
    mychannel.send(embed);
};