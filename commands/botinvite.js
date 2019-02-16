/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = async (client, message, args) => {
    if (message.author.id !== process.env.OWNERID) {
        return message.reply(`Only the owner of the bot can do this!`);
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