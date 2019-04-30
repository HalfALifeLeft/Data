/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission(`BAN_MEMBERS`, false, true, true)) {
        return message.reply(`You do not have the \`BAN_MEMBERS\` permission`)
        .catch(e => {
            console.error(e);
        });
    }
    message.reply(`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} has been terminated from the USS Enterprise.`)
    .catch(e => {
        console.error(e);
    });
    message.mentions.members.first().ban(`${args.slice(1).join(` `)}`)
    .catch(e => {
        console.error(e);
    });
};
module.exports.help = {
    name: `ban`
};