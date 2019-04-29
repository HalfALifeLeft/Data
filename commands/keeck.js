/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const modRole = message.member.hasPermission(`KICK_MEMBERS`, false, true, true);
    if (!modRole)
        return message.reply(`You do not have the \`KICK_MEMBERS\` permission`);

    if (!message.guild.me.hasPermission(`KICK_MEMBERS`))
        return message.reply(``);

    const kickMember = message.mentions.members.first();

            message.reply(`${kickMember.user.username} was escorted off the bridge.`);
};
module.exports.help = {
    name: `keeck`
};