/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports.run = async (client, message, args) => {
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const randomPuppy = require(`random-puppy`);
    randomPuppy(`memes`)
        .then(url => {
            const embed = new RichEmbed()
                .setFooter(`/r/memes`)
                .setDescription(`:joy: [memes are life](${url})`)
                .setImage(url)
                .setColor(process.env.HEXCODE);
            return message.channel.send({
                embed
            });
        });
};
module.exports.help = {
    name: `meme`
};