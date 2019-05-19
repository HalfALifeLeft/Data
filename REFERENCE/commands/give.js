/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    // Limited to guild owner - adjust to your own preference!
    if(message.author.id !== message.guild.owner.id) return message.reply(`You're not the boss of me, you can't do that!`);

    const user = message.mentions.users.first() || client.users.get(args[0]);
    if(!user) return message.reply(`You must mention someone or give their ID!`)
    .catch(e => {
        console.error(e);
    });

    const pointsToAdd = parseInt(args[1], 10);
    if(!pointsToAdd) return message.reply(`You didn't tell me how many points to give...`);
        
    const key = `${user.id}-${message.guild.id}`;
    //console.log(user);

    // Ensure there is a points entry for this user.
    client.currency.ensure(key, {
        user: user.id,
        guild: message.guild.id,
        points: 0,
        level: 1,
        lastSeen: new Date()
    });
        
    // Add the points to the enmap for this user.
    client.currency.math(key, `+`, pointsToAdd, `points`);
    
    message.channel.send(`<@${user.id}> has received ${pointsToAdd} points and now stands at ${client.currency.get(key, `points`)} points.`)
    .catch(e => {
        console.error(e);
    });
};
module.exports.help = {
    name: `give`
};