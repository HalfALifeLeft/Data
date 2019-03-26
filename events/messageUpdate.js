/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, message, oldMessage) => {
  
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

    const channelId = client.dataConfig.get(`${message.guild.id}`, `messageLogs`);
    if (message.guild.channels.has(channelId) == false) return;

    if (message.author.bot) return;
    const mychannel = message.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;
    let content = message.content;
    if (content.length > 1024) return;
    const newMessage = message.content;
    if (oldMessage == newMessage) {
        return;
    }
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setAuthor(message.author.username + `#` + message.author.discriminator, message.author.avatarURL)
        .setTimestamp()
        .setColor(process.env.HEXCODE)
        .addField(`Old Message`, `\`\`\`${newMessage}\`\`\``)
        .addField(`New Message`, `\`\`\`${oldMessage}\`\`\``)
        .setFooter(`#${message.channel.name}`);
    mychannel.send(embed);
};