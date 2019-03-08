/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const randomPuppy = require(`random-puppy`);
    var subreddit = args[0];
    if (!subreddit) return message.reply(`Captain, that does not compute!`); //shorter plus you had the return on the wrong place
    randomPuppy(`${subreddit}`)
        .then(url => {
            const embed = new RichEmbed()
                .setFooter(`/r/${subreddit}`)
                .setImage(url)
                .setColor(process.env.HEXCODE);
            return message.channel.send({
                embed
            });
        });
};
module.exports.help = {
    name: `subreddit`
};