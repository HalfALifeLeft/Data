/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    const Booru = require(`booru`);

    Booru.search(`safebooru.org`, [ `${args[0]}` ], {limit: 1, random: true})
        .then(function(images) {
            for (let image of images) {
                console.log(image.common.file_url);
                const { Client, RichEmbed } = require(`discord.js`);
                const embed = new RichEmbed()
                    .setColor(process.env.HEXCODE)
                    .setImage(image.common.file_url);
                message.channel.send({embed});
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