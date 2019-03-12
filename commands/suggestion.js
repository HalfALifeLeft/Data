/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let filter = m => m.author.id === message.author.id;
    let title = ``;
    let content = ``;
    const findSuggestionsChannel = message.guild.channels.find(channel => channel.name === `suggestions` && channel.type == `text`);

    if (!findSuggestionsChannel) {
        return message.reply(`Please tell an admin of the server to create the channel #suggestions so I can make suggestions for you all!`);
    }

    message.channel.send(`Send \`Cancel\` at any point to cancel your suggestion!\nBriefly, what is your suggestion?`);
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: [`time`]
    }).then((collectedOne) => {

        if (collectedOne.first().content.toLowerCase() === `cancel`) {
            return message.channel.send(`You have canceled your suggestion`);
        }

        title = collectedOne.first().content;

        message.channel.send(`Please further explain your suggestion, you have 300 seconds`);
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 300000,
            errors: [`time`]
        }).then((collectedTwo) => {

            if (collectedTwo.first().content.toLowerCase() === `cancel`) {
                return message.channel.send(`You have canceled your suggestion`);
            }

            content = collectedTwo.first().content;

            message.channel.send(`Would you like me to add the suggestion \`${title}\` with content:\n\`\`\`${content}\`\`\` Yes or No?`);
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: [`time`]
            }).then((collectedThree) => {

                if (collectedThree.first().content.toLowerCase() === `no`) {
                    return message.channel.send(`You have canceled your suggestion`);
                }

                if (collectedThree.first().content.toLowerCase() === `cancel`) {
                    return message.channel.send(`You have canceled your suggestion`);
                }

                if (collectedThree.first().content.toLowerCase() === `yes`) {

                    const {
                        Client,
                        RichEmbed
                    } = require(`discord.js`);
                    const embed = new RichEmbed()
                        .setTitle(title)
                        .setDescription(content)
                        .setColor(process.env.HEXCODE)
                        .setTimestamp()
                        .setFooter(`${message.author.username}#${message.author.discriminator}`);
                    findSuggestionsChannel.send(embed).then((msg) => {
                        msg.react(`👍`).catch((e) => {
                            console.error(e);
                        });
                        msg.react(`👎`).catch((e) => {
                            console.error(e);
                        });
                    }).catch((e) => {
                        console.error(e);
                    });
                }

            }).catch((e) => {
                console.error(e);
            });

        }).catch((e) => {
            console.error(e);
        });

    }).catch((e) => {
        console.error(e);
    });
};
module.exports.help = {
    name: `suggestion`
};