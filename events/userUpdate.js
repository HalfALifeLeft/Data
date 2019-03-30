/* eslint-disable no-console */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, oldUser, newUser) => {

    console.log(oldUser);
    console.log(newUser.lastMessage.channel);

    const channelId = client.dataConfig.get(`${newUser.guild.id}`, `memberLogs`);
    if (newUser.guild.channels.has(channelId) == false) return;

    const mychannel = client.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Old Member Username`, `${oldUser.username}#${oldUser.discriminator} (${oldUser.id})`)
        .addField(`New Member Username`, `${newUser.user.username}#${newUser.user.discriminator} (${newUser.user.id})`);
    mychannel.send(embed);
};

/*

  User {
    id: '444384280152637441',
    username: 'Half',
    discriminator: '3423',
    avatar: 'b6e056b7faf9aa3f38843d7e6a43d1a9',
    bot: false,
    lastMessageID: '561312062710611984',
    lastMessage:
     Message {
       channel: [TextChannel],
       deleted: false,
       id: '561312062710611984',
       type: 'DEFAULT',
       content:
        'dd!eval let oldUser = client.fetchUser(`444384280152637441`); let newUser = client.fetchUser(`444384280152637441`);client.emit(`userUpdate`, oldUser, newUser);',
       author: [Circular],
       member: [GuildMember],
       pinned: false,
       tts: false,
       nonce: '561312071073923072',
       system: false,
       embeds: [],
       attachments: Collection [Map] {},
       createdTimestamp: 1553897624424,
       editedTimestamp: null,
       reactions: Collection [Map] {},
       mentions: [MessageMentions],
       webhookID: null,
       hit: null,
       _edits: [] } } }

*/