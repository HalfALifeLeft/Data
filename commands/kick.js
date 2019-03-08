/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports.run = async (client, message, args) => {
    const modRole = message.guild.roles.find(`name`, `Mods`);
    if (!modRole)
        return message.reply(`The Mods role does not exist`);

    if (!message.member.roles.has(modRole.id))
        return message.reply(`You can't use this command.`);

    if (message.mentions.members.size === 0)
        return message.reply(process.env.MISSING_USER);

    if (!message.guild.me.hasPermission(`KICK_MEMBERS`))
        return message.reply(``);

    const kickMember = message.mentions.members.first();

    kickMember.kick(reason.join(` `)).then(member => {
        message.reply(`${member.user.username} was succesfully kicked.`);
    });
};
module.exports.help = {
    name: `kick`
};