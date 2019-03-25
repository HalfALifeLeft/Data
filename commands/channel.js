/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission(`MANAGE_CHANNELS`, false, true, true)) return message.channel.send(`**You need the \`MANAGE_CHANNELS\` permission to use this command.**`);
    if (args[0] === undefined) return message.reply(`you forgot the channel name!`);
    if (args[1] === undefined) return message.reply(`you forgot the channel type!`);
    message.guild.createChannel(`${args[0]}`, `${args[1]}`);
    message.channel.send(`created ${args[1]} channel by the name of ${args[0]}`);
};
module.exports.help = {
    name: `channel`
};