/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, messages) => {
    const channelId = client.dataConfig.get(`${message.guild.id}`, `messageLogs`);
    if (message.guild.channels.has(channelId) == false) return;

    const mychannel = messages.first().guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setAuthor(client.user.username + `#` + client.user.discriminator, client.user.avatarURL)
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField(`Messages Deleted`, `${messages.array().length} messages deleted!`)
        .setFooter(`#${messages.first().channel.name}`);
    mychannel.send(embed);
};