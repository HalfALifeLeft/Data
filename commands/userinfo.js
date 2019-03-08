/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const sm = require(`string-similarity`);
    var moment = require(`moment`);
    let members = [];
    let indexes = [];
    let argumentZero = args[0];
    var regExTest = RegExp(/<@!?\d+>/);

    if (!args[0]) {
        argumentZero = message.author.username;
    }

    message.guild.members.forEach(function (member) {
        members.push(member.user.username);
        indexes.push(member.id);
    });

    let match = sm.findBestMatch(argumentZero, members); //matching first argument with a name from the members array
    let username = match.bestMatch.target; //get the best match from variable match
    let memberIndex = message.guild.members.get(indexes[members.indexOf(username)]); //want the ID of the matched user, so we take the position of the name from members array and match it with the ID in the position of the indexes array.
    let usernameUser = ``;
    let userMention = ``;

    if (regExTest.test(argumentZero) === true) {
        memberIndex = message.guild.members.get(args[0].replace(`<@`, ``).replace(`!`, ``).replace(`>`, ``));
    }

    if (message.mentions.everyone === true) return message.reply(`You cannot tag everyone with this command!`);
    if (!args[0]) {
        usernameUser = message.author; //if there is no args[0] set it to message author
        userMention = message.member; //if no user is mentioned, set it to the member sending the message
    } else {
        let mention = message.mentions.users.first(); //let mentions mean the first user mentioned in the message
        usernameUser = mention || memberIndex.user;
        userMention = message.mentions.members.first() || message.guild.members.get(args[0]) || memberIndex; //set userMention equal to first tag OR the user found with args[0] OR member.
    }
    let userOptions = usernameUser || userMention; //get the options for how a user is selected
    let user = userOptions; //get the option that is used by the user
    let a = moment(Date.now());
    let b = moment(user.createdTimestamp);
    let c = moment(memberIndex.joinedTimestamp);
    let game = ``;

    if (!user.presence.game) {
        game = `This person isn't playing anything. How dare they have a life?!`;
    } else {
        game = user.presence.game;
    }

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`User Info: ${user.username}#${user.discriminator}`)
        .setDescription(`Chilling in ${user.presence.status} status`)
        .addField(`Game:`, `${game}`, true)
        .setColor(process.env.HEXCODE)
        .addField(`Bot:`, `${user.bot}`)
        .addField(`Created:`, `${moment.utc(user.createdTimestamp).format(`MMMM DD, YYYY, hh:mm a`)} (${a.diff(b, `days`)} days ago!)`, true)
        .addField(`Joined Server:`, `${moment.utc(memberIndex.joinedTimestamp).format(`MMMM DD, YYYY, hh:mm a`)} (${a.diff(c, `days`)} days ago!)`)
        .addField(`Roles:`, `${memberIndex.roles.filter(r => r.name !== `@everyone`).map(r => `<@&${r.id}>`).join(`, `) || `No Roles`}`)
        .setThumbnail(user.avatarURL)
        .setFooter(`User ID: ${user.id}`);
    message.channel.send({
        embed
    });
};
module.exports.help = {
    name: `userinfo`
};