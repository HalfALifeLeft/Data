/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const key = `${message.member.user.id}-${message.guild.id}`;

    // Get a filtered list (for this guild only), and convert to an array while we're at it.
    const filtered = client.currency.array();

    // Sort it to get the top results... well... at the top. Y'know.
    const sorted = filtered.sort((a, b) => a.points < b.points);

    // Slice it, dice it, get the top 10 of it!
    const top10 = sorted.splice(0, 10);

    // Now shake it and show it! (as a nice embed, too!)
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTitle(`Leaderboard`)
        .setAuthor(client.user.username, client.user.avatarURL)
        .setDescription(`Our top 10 points leaders!`)
        .setColor(process.env.HEXCODE);
    for(var data of top10) {
        console.log(data.userID);
        embed.addField(client.users.get(data.userID).tag, `${data.points} points (level ${data.level})`);
    }
    return message.channel.send({embed});
};
module.exports.help = {
    name: `leaderboard`
};