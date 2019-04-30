/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const sm = require(`string-similarity`);
    let members = [];
    let indexes = [];
    //    if(!args[0]) return message.reply(`you need to provide a user!`);
    message.guild.members.forEach(function (member) {
        members.push(member.user.username);
        indexes.push(member.id);
    });
    if (!args[0]) {
        args[0] = message.author.username;
    }
    let match = sm.findBestMatch(args[0], members); //matching first argument with a name from the members array
    let username = match.bestMatch.target; //get the best match from variable match
    let member = message.guild.members.get(indexes[members.indexOf(username)]); //want the ID of the matched user, so we take the position of the name from members array and match it with the ID in the position of the indexes array.
    let usernameUser = ``;
    let userMention = ``;

    if (message.mentions.everyone === true) return message.reply(`You cannot tag everyone with this command!`);
    if (!args[0]) {
        usernameUser = message.author; //if there is no args[0] set it to message author
        userMention = message.member; //if no user is mentioned, set it to the member sending the message
    } else {
        let mention = message.mentions.users.first(); //let mentions mean the first user mentioned in the message
        usernameUser = mention || member.user;
        userMention = message.mentions.members.first() || message.guild.members.get(args[0]) || member; //set userMention equal to first tag OR the user found with args[0] OR member.
    }
    let userOptions = usernameUser || userMention; //get the options for how a user is selected
    let user = userOptions; //get the option that is used by the user
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setImage(user.avatarURL);
    message.channel.send({
        embed
    })
    .catch(e => {
        console.error(e);
    });
};
module.exports.help = {
    name: `avatar`
};