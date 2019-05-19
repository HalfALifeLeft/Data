/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let key = `${message.member.user.id}-${message.guild.id}`;
    let i = 1;

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
        key = `${data.user}-${message.guild.id}`;
        await client.currency.ensure(key, {
            user: data.user,
            guild: message.guild.id,
            points: 0,
            level: 1,
            lastSeen: new Date()
        });    
        embed.addField(`${i} - ` + client.users.get(data.user).tag, `$${Math.floor(data.points / 10)} (level ${data.level})`);
        i++;
    }
    return message.channel.send({embed})
    .catch(e => {
        console.error(e);
    });
};
module.exports.help = {
    name: `leaderboard`
};