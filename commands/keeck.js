/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const modRole = message.member.hasPermission(`KICK_MEMBERS`, false, true, true);
    if (!modRole)
        return message.reply(`You do not have the \`KICK_MEMBERS\` permission`)
        .catch(e => {
            console.error(e);
        });

    if (!message.guild.me.hasPermission(`KICK_MEMBERS`))
        return message.reply(``);

    const kickMember = message.mentions.members.first();

    message.reply(`${kickMember.user.username} was escorted off the bridge.`)
    .catch(e => {
        console.error(e);
    });
};
module.exports.help = {
    name: `keeck`
};