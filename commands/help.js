/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`Commands List`)
        .setDescription(`Just a command list for Data's functionality. More help can be found with \`d!syntax [Users | Mods | Admins]\`!`)
        .setColor(process.env.HEXCODE)
        .addField(`User Commands`, `\`8ball, booru, avatar, help, hug, info, kitty, meme, ping, serverstats, subreddit, userinfo\``)
        .addField(`Mod Commands`, `\`kick, purge\``)
        .addField(`Admin Commands`, `\`channel, embed, logs\``)
        .setFooter(`Created by ` + process.env.OWNERNAME, `https://i.imgur.com/NVWwp1d.png`)
        .setTimestamp();
    message.channel.send({embed});



    /*    client.fs.readdir(`../commands/`, (err, files) => {
        if (err) console.error(err);
    
        let jsfiles = files.filter(f => f.split(`.`).pop()  === `js`);
    
        jsfiles.forEach((f, i) => {
            let props = require(`../commands/${f}`);
            console.log(props.name);
        });
    });*/

};
module.exports.help = {
    name: `help`
};