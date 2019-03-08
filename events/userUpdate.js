/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, oldUser, newUser) => {
    const mychannel = client.guild.channels.find(channel => channel.name === `member-events`);
    if (!mychannel) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Old Member Username`, `${oldUser.username}#${oldUser.discriminator} (${oldUser.id})`)
        .addField(`New Member Username`, `${newUser.username}#${newUser.discriminator} (${newUser.id})`);
    mychannel.send(embed);
};