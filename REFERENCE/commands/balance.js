/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let user = message.author.id;
    if(!message.mentions) {
        user = message.mentions.members.first().id;
    }

    const key = `${user}-${message.guild.id}`;

    
    client.currency.ensure(key, {
        userID: user,
        guildID: message.guild.id,
        points: 0,
        level: 1,
        lastSeen: new Date()
    });

    message.channel.send(`<@!${user}> currently has $${client.currency.get(key, `points`)}, and is level ${client.currency.get(key, `level`)}!`)
    .catch(e => {
        console.error(e);
    });

};
module.exports.help = {
    name: `balance`
};