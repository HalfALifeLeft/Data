/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const mentionsUsers = message.mentions.users.array();
    const equal = `=`;
    let arrayUsers = [];

    if (message.mentions.everyone) return message.reply(`You cannot tag everyone with this command!`);

    if (mentionsUsers.length == 0) {
        message.reply(`You need to tell me who's penis to measure!`)
        .catch(e => {
            console.error(e);
        });
    } else {
        mentionsUsers.forEach(function (m) {
            //check if user ID is in the enmap
            if (!client.penisEnmap.get(`${m.id}`)) {
                //if user ID is not in the enmap, add it to enmap with a randomly generated number of =
                client.penisEnmap.set(`${m.id}`, `${equal.repeat(Math.floor(Math.random() * 30))}`);
            }
            //set penis size as 8 + penisEnmap equals + D
            let penisSize = `8` + client.penisEnmap.get(m.id) + `D`;
            arrayUsers.push(`<@${m.id}>'s penis:\n **${penisSize}**`);
        });
        //send message to channel
        message.channel.send(`Here are the User's penis lengths, 100% accurate!\n\n${arrayUsers.toString().replace(`,`,`\n`)}`)
        .catch(e => {
            console.error(e);
        });
    }
};
module.exports.help = {
    name: `penis`
};