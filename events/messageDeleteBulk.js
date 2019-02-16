/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, messages) => {
    const mychannel = messages.first().guild.channels.find(channel => channel.name === `message-events`);
    if (!mychannel) return;
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setAuthor(client.user.username + `#` + client.user.discriminator, client.user.avatarURL)
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField(`Messages Deleted`,`${messages.array().length} messages deleted!`)
        .setFooter(`#${messages.first().channel.name}`);
    mychannel.send(embed);
};