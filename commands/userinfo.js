/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`User Info: ${message.author.username}#${message.author.discriminator}`)
        .setDescription(`Chilling in ${message.author.presence.status} status`)
        .setColor(process.env.HEXCODE)
        .addField(`Created:`,`${message.author.createdAt}`, true)
        .addField(`Joined Server:`,`${message.guild.joinedAt}`)
        .addField(`Roles:`,`${message.member.roles.filter(r => r.name !== `@everyone`).map(r => `${r.name}`).join(`, `) || `No Roles`}`)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`User ID: ${message.author.id}`);
    message.channel.send({embed});
};