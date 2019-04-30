/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let mutedRoleID = client.dataConfig.get(`${message.guild.id}`, `mutedRole`);
    let mutedRole = message.guild.roles.find(r => r.id === mutedRoleID);
    let modLogs = client.dataConfig.get(`${message.guild.id}`, `modLogs`);
    let mychannel = message.guild.channels.find(channel => channel.id === modLogs);

    if(!message.member.hasPermission(`KICK_MEMBERS`, false, true, true)) {
        return message.reply(`you are missing the \`KICK_MEMBERS\` permission`)
        .catch(e => {
            console.error(e);
        });
    }

    if(message.mentions.members.first().roles.has(mutedRoleID)) {
        message.mentions.members.first().removeRole(mutedRole);
        message.reply(`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} has been unmuted.`)
        .catch(e => {
            console.error(e);
        });
        const {
            Client,
            RichEmbed
        } = require(`discord.js`);
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Member Unmuted`, `${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} (${message.mentions.members.first().user.id})`);
        mychannel.send(embed)
        .catch(e => {
            console.error(e);
        });
    } else {
        message.reply(`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator} is not muted.`)
        .catch(e => {
            console.error(e);
        });
    }
};
module.exports.help = {
    name: `unmute`
};