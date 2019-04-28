/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission(`ADMINISTRATOR`, false, true, true)) {
        return message.reply(`you do not have the \`ADMINISTRATOR\` permission`);
    }
    let color = args[0];
    let content = args.slice(1).join(` `);
    if (content.length > 1024) return message.channel.send(`Your embed exceeds the character limit of 1024`);
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(`${color}`)
        .setDescription(`${content}`);
    return message.channel.send({
        embed
    });
};
module.exports.help = {
    name: `embed`
};