/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = async (client, messages) => {
  
        client.dataConfig.ensure(`${message.guild.id}`, {
        prefix: `d!`, 
        mutedRole: ``,
        messageLogs: ``,
        memberLogs: ``,
        serverLogs: ``,
        modLogs: ``,
        welcomeChannel: ``,
        ruleOne: ``,
        ruleTwo: ``,
        ruleThree: ``,
        ruleFour: ``,
        ruleFive: ``,
        ruleSix: ``,
        ruleSeven: ``,
        ruleEight: ``,
        ruleNine: ``,
        ruleTen: ``});

  
    var fs = require(`fs`);
    var moment = require(`moment`);
    const channelId = client.dataConfig.get(`${messages.first().guild.id}`, `messageLogs`);
    if (messages.first().guild.channels.has(channelId) == false) return;

    const mychannel = messages.first().guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setAuthor(client.user.username + `#` + client.user.discriminator, client.user.avatarURL)
        .setTimestamp()
        .setColor(process.env.ERROR)
        .addField(`Messages Deleted`, `${messages.array().length} messages deleted!`)
        .setFooter(`#${messages.first().channel.name}`);
    mychannel.send(embed);

    await fs.writeFile(`messageDeleteBulk.txt`, `Messages deleted on ${moment.utc(Date.now()).format(`MMMM DD, YYYY, hh:mm:ss a`)}` + `\r\n`, {
        'flags': `a`
    }, function (err, data) {
        if (err) console.error(err);
    });

    messages.tap(msg => {
        fs.appendFile(`messageDeleteBulk.txt`, `${msg.author.username}#${msg.author.discriminator} (${msg.author.id}) at ${moment.utc(msg.createdTimestamp).format(`MMMM DD, YYYY, hh:mm:ss a`)} message ID: ${msg.id}: \n` + msg.content + `\r\n`, {
            'flags': `a`
        }, function (err) {
            if (err) console.error(err);
        });

    });

    await mychannel.send({files: [{
        attachment: `./messageDeleteBulk.txt`,
        name: `messageDeleteBulk.txt`
    }]
    });

    fs.unlink(`./messageDeleteBulk.txt`, (e) => {
        if (e) return console.error(e);
    });
};