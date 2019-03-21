/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    // Limited to guild owner - adjust to your own preference!
    if(!message.author.id === message.guild.owner) return message.reply(`You're not the boss of me, you can't do that!`);

    const user = message.mentions.users.first() || client.users.get(args[0]);
    if(!user) return message.reply(`You must mention someone or give their ID!`);

    const pointsToAdd = parseInt(args[1], 10);
    if(!pointsToAdd) return message.reply(`You didn't tell me how many points to give...`);
        
    const key = `${message.guild.id}-${user.id}`;
    
    // Ensure there is a points entry for this user.
    client.currency.ensure(key, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1,
        lastSeen: new Date()
    });
        
    // Add the points to the enmap for this user.
    client.currency.math(key, `+`, pointsToAdd, `points`);
    
    message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${client.currency.get(key, `points`)} points.`);
};
module.exports.help = {
    name: `give`
};