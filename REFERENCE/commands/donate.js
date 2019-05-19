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
        .setTitle(`Donate`)
        .setDescription(`Creating Data Bot takes a good chunk of time, every dollar is appreciated, but donations are in no way necessary. Interested in donating?\n\n **Here is how:**\n[Paypal](https://paypal.me/HalfALifeLeft)`);
    message.channel.send({
        embed
    })
    .catch(e => {
        console.error(e);
    });

};
module.exports.help = {
    name: `donate`
};