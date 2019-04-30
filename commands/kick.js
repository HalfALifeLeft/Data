/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports.run = async (client, message, args) => {
    const modRole = message.member.hasPermission(`KICK_MEMBERS`, false, true, true);
    if (!modRole)
        return message.reply(`You do not have the \`KICK_MEMBERS\` permission`)
        .catch(e => {
            console.error(e);
        });

    if (message.mentions.members.size === 0)
        return message.reply(`Captain, who should I escport off the bridge?`)
        .catch(e => {
            console.error(e);
        });

    if (!message.guild.me.hasPermission(`KICK_MEMBERS`))
        return message.reply(``);

    const kickMember = message.mentions.members.first();

    kickMember.kick(args.slice(1).join(` `))
        .then(member => {
            message.reply(`${member.user.username} was escorted off the bridge.`)
            .catch(e => {
                console.error(e);
            });
        })
        .catch( e => {
            console.error(e);
        });
};
module.exports.help = {
    name: `kick`
};