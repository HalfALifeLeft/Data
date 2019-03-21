/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let mentionedUser = message.mentions.members.first();
    let userArgs = args.slice(1).join(` `);
    let regExTestOne = RegExp(/<#!?\d+>/);
    let regExTestTwo = RegExp(/<@!?\d+>/);

    if(!mentionedUser) {
        mentionedUser = message.author;
    }

    const key = `${mentionedUser.id}-${message.guild.id}`;

    //console.log(key);

    client.currency.ensure(key, {        
        user: mentionedUser.id,
        guild: message.guild.id,
        points: 0,
        level: 1,
        lastSeen: new Date()
    });


    message.channel.send(`<@!${mentionedUser.id}> currently has $${Math.floor(client.currency.get(key, `points`) / 10)}, and is level ${client.currency.get(key, `level`)}!`);

};
module.exports.help = {
    name: `balance`
};