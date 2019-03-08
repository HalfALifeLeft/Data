/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    var moment = require(`moment`);
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`Server Stats: ${message.guild.name}`)
        .setDescription(`This server was created at ${moment.utc(message.guild.createdAt).format(`MM/DD/YYYY - hh:mm:ss`)}`)
        .setColor(process.env.HEXCODE)
        .addField(`Region`, `${message.guild.region}`, true)
        .addField(`Users`, `${message.guild.members.filter(m => m.presence.status === `online`).size}/${message.guild.memberCount}`, true)
        .addField(`Text Channels`, `${message.guild.channels.filter(c => c.type === `text`).size}`, true)
        .addField(`Voice Channels`, `${message.guild.channels.filter(c => c.type === `voice`).size}`, true)
        .addField(`Roles`, `${message.guild.roles.size}`, true)
        .addField(`Owner`, `${message.guild.owner}`, true)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`Server ID: ${message.guild.id}`);
    message.channel.send({
        embed
    });
};
module.exports.help = {
    name: `serverstats`
};