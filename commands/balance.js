/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let userName = args[0];
    let userArgs = args.slice(1).join(` `);
    let regExTestOne = RegExp(/<#!?\d+>/);
    let regExTestTwo = RegExp(/<@!?\d+>/);
    const key = `${message.member.user.id}-${message.guild.id}`;
    

    message.channel.send(`You currently have ${client.currency.get(key, `points`)} points, and are level ${client.currency.get(key, `level`)}!`);



};
module.exports.help = {
    name: `balance`
};