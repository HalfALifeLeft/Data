/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const Booru = require(`booru`);

    Booru.search(`safebooru.org`, [`${args[0]}`], {
        limit: 1,
        random: true
    })
        .then(function (images) {
            for (let image of images) {
                const {
                    Client,
                    RichEmbed
                } = require(`discord.js`);
                const embed = new RichEmbed()
                    .setColor(process.env.HEXCODE)
                    .setImage(image.common.file_url);
                message.channel.send({
                    embed
                })
                .catch(e => {
                    console.error(e);
                });
            }
        })
        .catch(err => {
            if (err.name === `booruError`) {
                //It's a custom error thrown by the package
                console.log(err.message);
            } else {
                //This means I messed up. Whoops.
                console.log(err);
            }
        });
};

module.exports.help = {
    name: `booru`
};