/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = (client, member) => {
    // NEVER have client.on inside of a event or command, it FUCKS it up
    const mychannel = member.guild.channels.find(channel => channel.name === `member-events`);
    const general = member.guild.channels.find(channel => channel.name === `general`);
    var role = member.guild.roles.find(role => role.name === `Members`);

    if (role == null) return;
    member.addRole(role);

    if (mychannel == null) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Member joined`, `${member.user.username}#${member.user.discriminator} (${member.user.id})`);
    mychannel.send(embed);

    if (general == null) return;
    general.send(`<@${member.id}> has joined the server!`);
};