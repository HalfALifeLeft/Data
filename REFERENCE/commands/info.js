/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports.run = async (client, message, args) => {
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`Origins`)
        .setColor(process.env.HEXCODE)
        .setDescription(`Data was found by Starfleet in 2338 as the sole survivor on Omicron Theta in the rubble of a colony left after an attack from the Crystalline Entity. He was a synthetic life form with artificial intelligence and designed and built by Doctor Noonien Soong in his own likeness. Data is a self-aware, sapient, sentient and anatomically fully functional android who serves as the second officer and chief operations officer aboard the Federation starship USS Enterprise-D and later the USS Enterprise-E.`)
        .setFooter(`Created by ` + process.env.OWNERNAME, `https://i.imgur.com/NVWwp1d.png`)
        .setTimestamp()
        .addField(`Characteristics`, `Data is immune to nearly all biological diseases and other weaknesses that can affect humans and other carbon-based lifeforms. Data does not require life support to function and does not register a bio-signature. Another unique feature of Data's construction is the ability to be dismantled and then re-assembled for later use. Data is vulnerable to technological hazards such as computer viruses, certain levels of energy discharges, ship malfunctions (when connected to the Enterprise main computer for experiments), and shutdowns whether through remote control shutdown devices or through use of his off switch, located on his lower back near where a human kidney would be. Data can perform tasks underwater without the need to surface and is also impervious to sensory-tactile emotions such as pain or pleasure. Despite being mechanical in nature, Data is treated as an equal member of the Enterprise crew in every regard.`, true)
        .setThumbnail(`https://i.imgur.com/ysVtDyb.jpg`);
    return message.channel.send({
        embed
    })
    .catch(e => {
        console.error(e);
    });
};
module.exports.help = {
    name: `info`
};