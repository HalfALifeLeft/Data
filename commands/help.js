/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, func, args ) => {
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`Commands List`)
        .setDescription(`Just a command list for Data's functionality. More help can be found with \`d!syntax [Users | Mods | Admins]\`!`)
        .setColor(process.env.HEXCODE)
        .addField(`User Commands`, `\`avatar, help, info, kitty, meme, ping, serverstats, subreddit, userstats\``)
        .addField(`Mod Commands`, `\`kick, purge\``)
        .addField(`Admin Commands`, `\`channel, embed\``)
        .setFooter(`Created by ` + process.env.OWNERNAME, `https://i.imgur.com/NVWwp1d.png`)
        .setTimestamp();
    message.channel.send({embed});
};