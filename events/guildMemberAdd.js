/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = (client, member) => {
    const channelId = client.dataConfig.get(`${member.guild.id}`, `memberLogs`);
    const generalId = client.dataConfig.get(`${member.guild.id}`, `welcomeChannel`);
    if (member.guild.channels.has(channelId) == false) return;
    if (member.guild.channels.has(generalId) == false) return;

    // NEVER have client.on inside of a event or command, it FUCKS it up
    const mychannel = member.guild.channels.find(channel => channel.id === channelId);
    const general = member.guild.channels.find(channel => channel.id === generalId);
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