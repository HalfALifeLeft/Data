/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission(`CREATE_INSTANT_INVITE`, false, true, true)) {
        return message.reply(`You don't have the \`CREATE_INSTANT_INVITE\` permission!`);
    }

    message.channel.createInvite()
        .then(invite => {
            message.author.send(invite.url);
        })
        .catch(e => {
            console.error(e);
        });
};
module.exports.help = {
    name: `invite`
};