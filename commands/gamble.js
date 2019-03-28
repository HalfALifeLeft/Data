/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    let user = message.author.id;
    let gambleAmount = parseInt(args[0]);
    const key = `${user}-${message.guild.id}`;
    let userPaintchips = client.currency.get(`${key}`, `points`);
    let gambleResult = Math.floor(Math.random() * 100);

    client.currency.ensure(key, {
        userID: user,
        guildID: message.guild.id,
        points: 0,
        level: 1,
        lastSeen: new Date()
    });

    if (args[0] == `all`) {
        gambleAmount = parseInt(userPaintchips);
    }

    if (gambleResult <= 50) {
        client.currency.math(key, `-`, gambleAmount, `points`);
        return message.reply(`Rolled a ${gambleResult}, You lost $${gambleAmount}!`);
    }

    if (50 < gambleResult < 99) {
        client.currency.math(key, `+`, gambleAmount, `points`);
        return message.reply(`Rolled a ${gambleResult}, You gained $${gambleAmount}!`);
    }

    if (gambleResult == 100) {

        gambleAmount = gambleAmount * 2;

        client.currency.math(key, `+`, gambleAmount, `points`);
        return message.reply(`Rolled a ${gambleResult}, You hit a jackpot! You gained double the reward!`);
    }
};
module.exports.help = {
    name: `gamble`
};