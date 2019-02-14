/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const sm = require(`string-similarity`);
    let members = [];
    let indexes = [];
    var fs = require(`fs`);
    var regExTest = RegExp(/<@!?\d+>/);
    const myguild = client.guilds.find(guild => guild.id === `504724131170746369`);
    let filter = m => m.author.id === message.author.id;
    let usernameUser = ``;
    let messageContent = ``;


    myguild.members.forEach(function (member) {
        members.push(member.user.username);
        indexes.push(member.id);
    });

    message.channel.send(`specify who to send the letter to! You have 10 seconds`);
    await message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: [`time`]
    }).then((collectedOne) => {
        let usernameTest = collectedOne.first().content;
        let match = sm.findBestMatch(usernameTest, members);
        let username = match.bestMatch.target;
        let memberIndex = myguild.members.get(indexes[members.indexOf(username)]);

        if (collectedOne.first().content === `cancel` || collectedOne.first().content === `Cancel`) {
            return message.channel.send(`canceled`);
        }

        if (message.mentions.everyone === true) return message.reply(`You cannot tag everyone with this command!`);

        if (regExTest.test(usernameTest) === true) {
            memberIndex = message.guild.members.get(usernameTest.replace(`<@`, ``).replace(`!`, ``).replace(`>`, ``));
        }

        usernameUser = memberIndex;
        
    }).catch(err => {
        return message.channel.send(`You didn't specify a name in time! Please retry the command!`);
    });

    message.channel.send(`Now please send the love letter! You have 30 seconds!`);
    await message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: [`time`]
    }).then((collectedTwo) => {
        if (collectedTwo.first().content === `cancel` || collectedTwo.first().content === `Cancel`) {
            message.channel.send(`canceled`);
            return;
        } else {

            messageContent = collectedTwo.first().content;

        }
    }).catch(err => {
        return message.channel.send(`You didn't specify a letter in time! Please retry the command!`);
    });

    console.log(usernameUser.user.username);

    message.channel.send(`Would you like to send \`\`\`${messageContent}\`\`\` to ${usernameUser.user.username}#${usernameUser.user.discriminator}? Reply with \`Yes\` to send or \`No\` to cancel the letter.`);
    await message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: [`time`]
    }).then((collectedThree) => {
        if (collectedThree.first().content === `no` || collectedThree.first().content === `No`) {
            message.channel.send(`canceled`);
            return;
        } else {

            if (collectedThree.first().content === `yes` || collectedThree.first().content === `Yes`) {
                usernameUser.send(`A special someone has sent you a love letter! Here it is: `)
                    .catch(function(e) {
                        console.error(e);
                    });
                usernameUser.send(messageContent)
                    .catch(function(e) {
                        console.error(e);
                        message.reply(`I am sorry, but I cannot DM your love. Their DMs are closed!`);
                    });
                message.channel.send(`I have sent your love letter!`)
                    .catch(function(e) {
                        console.error(e);
                    });
            } else {
                message.reply(`I need you to respond with either yes or no! Please try the command again!`);
            }
        }
    }).catch(err => {
        return message.channel.send(`You didn't make a choice in time! Please retry the command!`);
    });
};
module.exports.help = {
    name: `loveletter`
};