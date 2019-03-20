/* eslint-disable no-console */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, message, oldUser) => {
    
    return;

    let newUser = message.member.user.username;

    console.log(oldUser);
    console.log(newUser);
    //console.log(`------`);
    //console.log(newUser);
    //console.log(`------`);

    const channelId = client.dataConfig.get(`${newUser.guild.id}`, `memberLogs`);
    if (newUser.guild.channels.has(channelId) == false) return;

    const mychannel = client.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Old Member Username`, `${oldUser.username}#${oldUser.discriminator} (${oldUser.id})`)
        .addField(`New Member Username`, `${newUser.user.username}#${newUser.user.discriminator} (${newUser.user.id})`);
    mychannel.send(embed);
};