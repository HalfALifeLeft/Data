/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const configPrefix = client.dataConfig.get(`${message.guild.id}`, `prefix`);
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);

    function clean(text) {
        if (typeof (text) === `string`)
            return text.replace(/`/g, `\`` + String.fromCharCode(8203)).replace(/@/g, `@` + String.fromCharCode(8203));
        else
            return text;
    }
    if (message.content.startsWith(configPrefix + `eval`)) {
        let arrayOfID = [`444384280152637441`];
        if (!arrayOfID.includes(message.author.id)) return; //only ids above can use this
        try {
            let evaled = message.content.slice(configPrefix.length + 4).trim();
            // you do .toLowerCase() on args when defining them, so you can't use them in your eval. I made it so it removes the prefix and four letters from the start of the word and then evals everything else
            let evaledCode = eval(evaled); //eval the code
            //        message.delete();
            const embed = new RichEmbed()
                .setAuthor(message.author.username + `#` + message.author.discriminator, message.author.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setColor(process.env.HEXCODE)
                .addField(`Input 📥 `, `\`\`\`${evaled}\`\`\``)
                .addField(`Output 📤 `, `\`\`\`${evaledCode}\`\`\``);
            message.channel.send(embed);
        } catch (err) {
            //        message.delete();
            let evaled = message.content.slice(configPrefix.length + 4).trim();
            const embed = new RichEmbed()
                .setAuthor(message.author.username + `#` + message.author.discriminator, message.author.avatarURL)
                .setThumbnail(client.user.avatarURL)
                .setColor(process.env.ERROR)
                .addField(`Evaled Command 📥 `, `\`\`\`${evaled}\`\`\``)
                .addField(`Error ❌ `, `\`\`\`${err}\`\`\``);
            message.channel.send(embed);
        }
    }
};
module.exports.help = {
    name: `eval`
};