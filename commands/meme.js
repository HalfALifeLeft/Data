/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
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
            })
            .catch(e => {
                console.error(e);
            });
        });
};
module.exports.help = {
    name: `meme`
};