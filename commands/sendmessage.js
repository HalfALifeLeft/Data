/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unreachable*/
exports.run = async (client, message, args) => {
    return;
    const sm = require(`string-similarity`);
    let members = [];
    let indexes = [];
    var fs = require(`fs`);
    var regExTest = RegExp(/<@!?\d+>/);
    const myguild = client.guilds.find(guild => guild.id === `504724131170746369`);
    let filter = m => m.author.id === message.author.id;
    let usernameUser = ``;
    let messageContent = ``;
    let messageId = [];

    myguild.members.forEach(function (member) {
        members.push(member.user.username);
        indexes.push(member.id);
    });

    message.channel.send(`specify who to send the message to! You have 30 seconds`).then(msg => {
        msg.delete(3000);
    });
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: [`time`]
    }).then((collectedOne) => {
        let usernameTest = collectedOne.first().content;
        let match = sm.findBestMatch(usernameTest, members);
        let username = match.bestMatch.target;
        let memberIndex = myguild.members.get(indexes[members.indexOf(username)]);

        if (collectedOne.first().content === `cancel` || collectedOne.first().content === `Cancel`) {
            return message.channel.send(`canceled`).then(msg => {
                msg.delete(3000);
            });
        }

        if (message.mentions.everyone === true) return message.reply(`You cannot tag everyone with this command!`);

        if (regExTest.test(usernameTest) === true) {
            memberIndex = message.guild.members.get(usernameTest.replace(`<@`, ``).replace(`!`, ``).replace(`>`, ``));
        }

        usernameUser = memberIndex;
        messageId.push(collectedOne.first().id);
        collectedOne.first().delete();
        message.channel.send(`Now please send the message I should send! You have 90 seconds!`).then(msg => {
            msg.delete(3000);
        });
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: [`time`]
        }).then((collectedTwo) => {
            if (collectedTwo.first().content === `cancel` || collectedTwo.first().content === `Cancel`) {
                return message.channel.send(`canceled`).then(msg => {
                    msg.delete(3000);
                });
            } else {

                messageContent = collectedTwo.first().content;
                messageId.push(collectedTwo.first().id);

            }
            collectedTwo.first().delete();
            message.channel.send(`Would you like to send \`\`\`${messageContent}\`\`\` to ${usernameUser.user.username}#${usernameUser.user.discriminator}? Reply with \`Yes\` to send or \`No\` to cancel the letter.`).then(msg => {
                msg.delete(3000);
            });
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: [`time`]
            }).then((collectedThree) => {
                let dataImage = ``;

                messageId.push(collectedThree.first().id);

                if (collectedThree.first().content === `no` || collectedThree.first().content === `No`) {
                    message.channel.send(`canceled`).then(msg => {
                        msg.delete(3000);
                    });
                    collectedThree.first().delete();
                    return;
                } else {

                    if (collectedThree.first().content === `yes` || collectedThree.first().content === `Yes`) {
                        usernameUser.send(`Someone has sent you a message! Here it is: `)
                            .catch(function (e) {
                                console.error(e);
                            });
                        usernameUser.send(messageContent)
                            .catch(function (e) {
                                console.error(e);
                                message.reply(`I am sorry, but I cannot DM the selected user. Their DMs are closed!`);
                            });

                        var data = `Message from ${message.author.username}#${message.author.discriminator} sent to ${usernameUser.user.username}#${usernameUser.user.discriminator}, image: ${dataImage.url}, content: ${messageContent}`;

                        fs.appendFile(`messages.txt`, data + `\r\n`, {
                            'flags': `a`
                        }, function (err, data) {
                            if (err) console.log(err);
                        });

                    } else {
                        message.reply(`I need you to respond with either yes or no! Please try the command again!`);
                    }
                }
                collectedThree.first().delete();
            }).catch(err => {
                return message.channel.send(`You didn't make a choice in time! Please retry the command!`);
            });
        }).catch(err => {
            return message.channel.send(`You didn't specify a letter in time! Please retry the command!`);
        });


    }).catch(err => {
        return message.channel.send(`You didn't specify a name in time! Please retry the command!`);
    });
};
module.exports.help = {
    name: `sendmessage`
};