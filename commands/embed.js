/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let allowedRole = message.guild.roles.find(`name`, `Admins`);
    if (message.member.roles.has(allowedRole.id)) return message.channel.send(`**You lack the required permissions to use this command.**`);
    //if owner isnt the one sending the message it replies with no perms
    let color = args[0];
    let content = args.slice(1).join(` `);
    if (content.length > 1024) return message.channel.send(`Your embed exceeds the character limit of 1024`);
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()	
        .setColor(`${color}`)
        .setDescription(`${content}`);
    return message.channel.send({embed});
};
module.exports.help = {
    name: `embed`
};