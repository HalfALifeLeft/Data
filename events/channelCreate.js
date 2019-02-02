/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = (client, Channel) => {
    // NEVER have client.on inside of a event or command, it FUCKS it up
    const mychannel = client.channels.find(channel => channel.name === `server-events`);
    if (!mychannel) return;
    if (Channel.type == `dm`) return;
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Channel Created`,`#${Channel.name} (\`${Channel.id}\`)`);
    mychannel.send(embed);
};