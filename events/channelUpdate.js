/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, oldChannel, newChannel) => {
    const mychannel = Channel.guild.channels.find(channel => channel.name === `server-events`);
    if (!mychannel) return;
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Old Channel`,`#${oldChannel.name}`, true)
        .addField(`New Channel`,`#${newChannel.name}`, true);
    mychannel.send(embed);
};