/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    let AllowedRole = message.guild.roles.find(role => role.name === `Admins`);
    if (!AllowedRole) return message.reply(`you do not have the proper permissions!`);
    if(args[0] === undefined) return message.reply(`you forgot the channel name!`);
    if(args[1] === undefined) return message.reply(`you forgot the channel type!`);
    message.guild.createChannel(`${args[0]}`, `${args[1]}`);
    message.channel.send(`created ${args[1]} channel by the name of ${args[0]}`);
};