/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = (client, member) => {
    // NEVER have client.on inside of a event or command, it FUCKS it up
/*    const mychannel = client.channels.find(channel => channel.name === `member-events`);
    const general = client.channels.find(channel => channel.name === `general`);
    if (!mychannel) return; */
    client.settings.ensure(member.guild.id, client.defaultSettings);
    let welcomeMessage = client.settings.get(member.guild.id, `welcomeMessage`);
    welcomeMessage = welcomeMessage.replace(`{{user}}`, member.user.id);
    member.guild.channels
        .find(c => c.name === client.settings.get(member.guild.id, `welcomeChannel`))
        .send(welcomeMessage)
        .catch(console.error);
    var role = member.guild.roles.find(role => role.name === `Members`);
    // Send the message, mentioning the member
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Member joined`,`${member.user.username}#${member.user.discriminator} (${member.user.id})`);
    /*    mychannel.send(embed); */
    member.addRole(role);
};