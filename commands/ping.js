/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports.run = async (client, message, args) => {
    //    console.log(client.functions.example(2, 5));
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setDescription(`Ready captain! ${client.func.ping(client)} ms`);
    return message.channel.send({embed});
};
module.exports.help = {
    name: `ping`
};