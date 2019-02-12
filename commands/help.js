/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`Commands List`)
        .setDescription(`Just a command list for Data's functionality. More help can be found with \`d!syntax [Users | Mods | Admins]\`!`)
        .setColor(process.env.HEXCODE)
        .addField(`User Commands`, `\`8ball, booru, avatar, help, hug, info, kitty, meme, ping, serverstats, subreddit, userstats\``)
        .addField(`Mod Commands`, `\`kick, purge\``)
        .addField(`Admin Commands`, `\`channel, embed, logs\``)
        .setFooter(`Created by ` + process.env.OWNERNAME, `https://i.imgur.com/NVWwp1d.png`)
        .setTimestamp();
    message.channel.send({embed});
};
module.exports.help = {
    name: `help`
};