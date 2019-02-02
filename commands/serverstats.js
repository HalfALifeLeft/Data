/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`Server Stats: ${message.guild.name}`)
        .setDescription(`Server ID: ${message.guild.id}`)
        .setColor(process.env.HEXCODE)
        .addField(`Region`,`${message.guild.region}`, true)
        .addField(`Users`,`${message.guild.members.filter(m => m.presence.status === `online`).size}/${message.guild.memberCount}`, true)
        .addField(`Text Channels`,`${message.guild.channels.filter(c => c.type === `text`).size}`, true)
        .addField(`Voice Channels`,`${message.guild.channels.filter(c => c.type === `voice`).size}`, true)
        .addField(`Roles`,`${message.guild.roles.size}`, true)
        .addField(`Owner`,`${message.guild.owner}`, true)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`This server was created at ${message.guild.createdAt}`);
    message.channel.send({embed});
};