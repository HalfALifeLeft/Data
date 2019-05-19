/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
module.exports.run = async (client, message, args) => {
    
    let cooldownLength = 30000;
    let cooldownLengthS = cooldownLength / 1000;
    let usedDate = Date.now();

    if (Date.now() - client.userCooldown[message.author.id] > cooldownLength || !client.userCooldown[message.author.id]) {
        client.userCooldown[message.author.id] = usedDate;

        const {
            Client,
            RichEmbed
        } = require(`discord.js`);
        const embed = new RichEmbed()
            .setColor(process.env.HEXCODE)
            .setDescription(`Ready captain! ${client.func.ping(client)} ms`);
        message.channel.send({
            embed
        })
        .catch(e => {
            console.error(e);
        });

        setTimeout(() => {
            client.userCooldown[message.author.id] = false;
        }, cooldownLength); // 30 seconds

    } else {

        let elapsedTime = Date.now() - client.userCooldown[message.author.id];
        var rounded = Math.round(elapsedTime * 10) / 10;
        var fixed = rounded.toFixed(1);
        var timeLeft = parseFloat(fixed) / 1000;
        var timeLeftRounded = timeLeft.toFixed(1);

        message.reply(`Please wait **${cooldownLengthS - timeLeftRounded} seconds** to use this command again!`)
        .catch(e => {
            console.error(e);
        });
    }
};
module.exports.help = {
    name: `ping`
};