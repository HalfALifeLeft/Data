/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    const gifSearch = require(`gif-search`);
    let gifURL = ``;
    if(!args[0]) return message.reply(`you need to tag someone to hug!`);
    // eslint-disable-next-line no-console
    gifSearch.random(`hug`).then(gifUrl => console.log(gifUrl));
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setURL(`${gifUrl}`);
    message.channel.send({embed});
//    console.log(gifURL);
};