/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    let allRoles = [];

    message.guild.roles.forEach(function (role) {
        allRoles.push(role.name + ` - ` + role.id);
    });

    let i = 0;
    let o = 1;
    let tenRoles = allRoles.slice(i * 20, o * 20);

    message.channel.send(`\`\`\`**Page (${o}/${Math.ceil(allRoles.length / 20)})**\n` + tenRoles.join(`\n`).toString() + `\`\`\``)
        .then((msg) => {
            msg.react(`⬅`)
                .then(() => {
                    msg.react(`➡`)
                        .catch((e) => {
                            console.error(e);
                        });
                })
                .catch((e) => {
                    console.error(e);
                });

            const collector = msg.createReactionCollector((reaction, user) =>
                user.id === message.author.id &&
                reaction.emoji.name === `⬅` ||
                reaction.emoji.name === `➡`, {
                    time: 300000
                }
            );

            collector.on(`collect`, reaction => {
                const react = reaction.emoji.name;

                if (react === `⬅`) {
                    i--;
                    o--;
                    if (i < 0) {
                        i = Math.ceil(allRoles.length / 20) - 1;
                    }
                    if (o < 1) {
                        o = Math.ceil(allRoles.length / 20);
                    }
                    tenRoles = allRoles.slice(i * 20, o * 20);
                    msg.edit(`\`\`\`**Page (${o}/${Math.ceil(allRoles.length / 20)})**\n` + tenRoles.join(`\n`).toString() + `\`\`\``);
                    reaction.remove(message.author);
                } else if (react === `➡`) {
                    i++;
                    o++;
                    if (i >= Math.ceil(allRoles.length / 20)) {
                        i = 0;
                    }
                    if (o >= Math.ceil(allRoles.length / 20) + 1) {
                        o = 1;
                    }
                    tenRoles = allRoles.slice(i * 20, o * 20);
                    msg.edit(`\`\`\`**Page (${o}/${Math.ceil(allRoles.length / 20)})**\n` + tenRoles.join(`\n`).toString() + `\`\`\``);
                    reaction.remove(message.author);
                }

                setTimeout(function () {
                    collector.stop();
                }, 300000);
            });
        });
};
module.exports.help = {
    name: `roles`
};