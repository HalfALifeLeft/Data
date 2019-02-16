/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = async (client, message, args) => {
    let allowedRole = message.guild.roles.find(r => r.name === `Admins`);
    if (!message.member.roles.has(allowedRole.id)) {
        return message.reply(`Only Admins can do this!`);
    }
    client.generateInvite([2146958591])
        .then(link => {
            message.author.send(link);
        })
        .catch(e => {
            console.error(e);
        });
};
module.exports.help = {
    name: `botinvite`
};