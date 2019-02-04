/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    const sm = require(`string-similarity`);
    var moment = require(`moment`);
    let members = [];
    let indexes = [];
    let userFromId = ``;
    const regExTest = RegExp(/<@\d+/);

    client.fetchUser(args[0]);

    if(!args[0]) {
        args[0] = message.author.username;
    } else {
    console.log(`RegEx Outer Else Worked`);
        if(args[0] === regExTest) {
            console.log(`RegEx worked`);
            async () => {
             /*   try {
                    const User = await client.fetchUser(id) 
                    const member = await guild.fetchmember(User)
                    const role = guild.roles.find(r => r.name === `Testing`);
                    await member.addRole(role);
                    await channel.send(`Success!`);
                } catch (e) {
                    console.error(e);
                } */
            }
        }
    }
    message.guild.members.forEach(function(member){
        members.push(member.user.username);
        indexes.push(member.id);
    });
    let match = sm.findBestMatch(args[0], members); //matching first argument with a name from the members array
    let username = match.bestMatch.target; //get the best match from variable match
    let memberIndex = message.guild.members.get(indexes[members.indexOf(username)]); //want the ID of the matched user, so we take the position of the name from members array and match it with the ID in the position of the indexes array.
    let usernameUser = ``;
    let userMention = ``;
    if(args[0] === regExTest) {
        console.log(`RegExp Worked`);
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

    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`User Info: ${user.username}#${user.discriminator}`)
        .setDescription(`Chilling in ${user.presence.status} status`)
        .setColor(process.env.HEXCODE)
        .addField(`Created:`,`${moment.utc(user.createdTimestamp).format(`MM/DD/YYYY - hh:mm:ss`)}`, true)
        .addField(`Joined Server:`,`${moment.utc(memberIndex.joinedTimestamp).format(`MM/DD/YYYY - hh:mm:ss`)}`)
        .addField(`Roles:`,`${memberIndex.roles.filter(r => r.name !== `@everyone`).map(r => `${r.name}`).join(`, `) || `No Roles`}`)
        .setThumbnail(user.avatarURL)
        .setFooter(`User ID: ${user.id}`);
    message.channel.send({embed});
};