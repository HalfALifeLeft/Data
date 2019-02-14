/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const { Client, RichEmbed } = require(`discord.js`);
    const randomPuppy = require(`random-puppy`);
    randomPuppy(`cats`)
        .then(url => {
            const embed = new RichEmbed()
                .setFooter(`/r/cats`)
                .setDescription(`Meow meow mothermeowers`)
                .setImage(url)
                .setColor(process.env.HEXCODE);
            return message.channel.send({ embed });
        });
};
module.exports.help = {
    name: `kitty`
};