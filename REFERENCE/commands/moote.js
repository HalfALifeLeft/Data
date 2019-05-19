/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {    
    if(!message.member.hasPermission(`KICK_MEMBERS`, false, true, true)) {
        return message.reply(`you are missing the \`KICK_MEMBERS\` permission`);
    }

    message.reply(`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} has been mooted.`)
    .catch(e => {
        console.error(e);
    });
};
module.exports.help = {
    name: `moote`
};