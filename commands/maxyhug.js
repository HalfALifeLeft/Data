/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setImage(`https://i.imgur.com/fe4EWHL.png`);
    message.channel.send({
        embed
    });
};
module.exports.help = {
    name: `maxyhug`
};