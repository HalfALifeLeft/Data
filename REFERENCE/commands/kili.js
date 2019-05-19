/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports.run = async (client, message, args) => {
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setImage(`https://i.imgur.com/LeTsLld.png`);
    message.channel.send(embed)
    .catch(e => {
        console.error(e);
    });
};
module.exports.help = {
    name: `kili`
};