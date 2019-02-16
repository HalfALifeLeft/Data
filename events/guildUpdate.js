/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, oldGuild, newGuild) => {
    const mychannel = client.guild.channels.find(channel => channel.name === `server-events`);
    if (!mychannel) return;
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Old Server Name`,`${oldGuild.name}`, true)
        .addField(`New Server Name`,`${newGuild.name}`, true);
    mychannel.send(embed);
};