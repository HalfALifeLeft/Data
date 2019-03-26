/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    let allRoles = [];
    //const filter = m => m.author.id === message.author.id;

    message.guild.roles.forEach(function (role) {
        allRoles.push(role.name + ` - ` + role.id);
    });

    let i = 0;
    let o = 1;
    let tenRoles = allRoles.slice(i * 10, o * 10);

    console.log(tenRoles);

    await message.channel.send(`\`\`\`` + tenRoles.join(`\n`).toString() + `\`\`\``)
    .then((msg) => {
        msg.react(`⬅`);
        msg.react(`➡`);
    });
    console.log(`collector started`);
    const collector = message.createReactionCollector((reaction, user) => 
        user.id === message.author.id &&
        reaction.emoji.name === `⬅` ||
        reaction.emoji.name === `➡`
    ).once(`collect`, reaction => {
        const chosen = reaction.emoji.name;
        if (chosen === `⬅`) {
            console.log(`previous page`);
        } else if (chosen === `➡`) {
            console.log(`next page`);
        }
        console.log(`collector stopped`);
        collector.stop();
    });

};
module.exports.help = {
    name: `roles`
};

/*

        .then((msg) => {

            msg.react(`➡`)
                .then(async (emoji1) => {
                    const filter = reaction => reaction.emoji.name === `➡`;
                    console.log(`go forward ran`);
                    msg.awaitReactions(filter && filterUser, {
                            time: 15000
                        })
                        .then((message) => {
                            i++;
                            o++;
                            tenRoles = allRoles.slice(i * 10, o * 10);
                            msg.edit(`\`\`\`` + tenRoles.join(`\n`).toString() + `\`\`\``);
                        })
                        .catch((e) => {
                            console.error(e);
                        });
                })
                .catch((e) => {
                    console.error(e);
                });
            msg.react(`⬅`)
                .then(async (emoji2) => {
                    const filter = reaction => reaction.emoji.name === `⬅`;
                    console.log(`go back ran`);
                    msg.awaitReactions(filter && filterUser, {
                            time: 15000
                        })
                        .then((message) => {
                            i--;
                            o--;
                            tenRoles = allRoles.slice(i * 10, o * 10);
                            msg.edit(`\`\`\`` + tenRoles.join(`\n`).toString() + `\`\`\``);
                        })
                        .catch((e) => {
                            console.error(e);
                        });
                })
                .catch((e) => {
                    console.error(e);
                });
        })
        .catch((e) => {
            console.error(e);
        });


*/