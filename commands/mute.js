/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let mutedRoleID = client.dataConfig.get(`${message.guild.id}`, `mutedRole`);
    
    if(!message.member.hasPermission(`KICK_MEMBERS`, false, true, true)) {
        return message.reply(`you are missing the \`KICK_MEMBERS\` permission`)
        .catch(e => {
            console.error(e);
        });
    }

    if(message.guild.roles.has(mutedRoleID) == false) {
        return message.reply(`Captain, the muted role has not been set up yet! Use \`d!config mutedRole <roleID>\` to set it up! (\`NO_MUTED_ROLE\`)`)
        .catch(e => {
            console.error(e);
        });
    }

    let mutedRole = message.guild.roles.find(r => r.id === mutedRoleID);
    if(message.mentions.members.first().roles.has(mutedRoleID)) {
        return message.reply(`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} is already muted.`)
        .catch(e => {
            console.error(e);
        });
    }
    message.mentions.members.first().addRole(mutedRole);
    message.reply(`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} has been muted.`);
    let modLogs = client.dataConfig.get(`${message.guild.id}`, `modLogs`);
    let mychannel = message.guild.channels.find(channel => channel.id === modLogs);
    if(mychannel) {
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField(`Member Muted`, `${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} (${message.mentions.members.first().user.id})`);
    mychannel.send(embed)
    .catch(e => {
        console.error(e);
    });
    }
};
module.exports.help = {
    name: `mute`
};