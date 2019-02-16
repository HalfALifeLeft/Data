/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
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