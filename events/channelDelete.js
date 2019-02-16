/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = (client, Channel) => {
    // NEVER have client.on inside of a event or command, it FUCKS it up
    const mychannel = Channel.guild.channels.find(channel => channel.name === `server-events`);
    if (!mychannel) return;
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField(`Channel deleted`,`#${Channel.name} (\`${Channel.id}\`)`);
    mychannel.send(embed);
};