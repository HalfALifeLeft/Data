/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = async (client, oldChannel, newChannel) => {

    if (oldChannel.type == `dm`) return;

    client.dataConfig.ensure(`${oldChannel.guild.id}`, {
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
        ruleTen: ``
    });

    //console.log(oldChannel.permissionOverwrites); use permissions.toArray for old and new, then use those to check eachother, if something exists in both, remove it. https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=toArray

    const channelId = client.dataConfig.get(`${oldChannel.guild.id}`, `serverLogs`);
    let topicOld = oldChannel.topic;
    let topicNew = newChannel.topic;
    if (newChannel.guild.channels.has(channelId) == false) return;

    const mychannel = oldChannel.guild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;

    if (oldChannel == newChannel) return;

    if (oldChannel == null) return;

    if (oldChannel.name == newChannel.name && oldChannel.parentID == newChannel.parentID && oldChannel.topic == newChannel.topic && oldChannel.nsfw == newChannel.nsfw && oldChannel.position != newChannel.position) return;

    if (topicOld == ``) {
        topicOld = `Nothing`;
    }

    if (topicNew == ``) {
        topicNew = `Nothing`;
    }

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .addField(`Channel Updated`, `<#${oldChannel.id}> (\`${oldChannel.id}\`)`)
        .addField(`Old Channel Details`, `Name: ${oldChannel.name}\nCategory: ${oldChannel.parent.name}\nChannel Topic: ${topicOld}\nNSFW: ${oldChannel.nsfw}`)
        .addField(`Old Channel Details`, `Name: ${newChannel.name}\nCategory: ${newChannel.parent.name}\nChannel Topic: ${topicNew}\nNSFW: ${newChannel.nsfw}`);
    mychannel.send(embed)
    .catch(e => {
      console.error(e);
  });
};

/*

  ------ OLD ------

TextChannel {
  type: 'text',
  deleted: false,
  id: '557806629622644757',
  name: 'message-events',
  position: 26, - different
  parentID: '557806629131780116',
  permissionOverwrites:
   Collection [Map] {
     '553026447367995403' => PermissionOverwrites {
       id: '553026447367995403',
       type: 'role',
       deny: 3148800,
       allow: 0,
       denied: [Permissions],
       allowed: [Permissions] },
     '554424972420972586' => PermissionOverwrites {
       id: '554424972420972586',
       type: 'role',
       deny: 3072,
       allow: 0,
       denied: [Permissions],
       allowed: [Permissions] },
     '552025742125563915' => PermissionOverwrites {
       id: '552025742125563915',
       type: 'role',
       deny: 3072,
       allow: 0,
       denied: [Permissions],
       allowed: [Permissions] } },
  topic: null,
  nsfw: false,
  lastMessageID: '561802371919904788',
  guild:
   Guild {
     members:
      Collection [Map] { MEMBERS },
     channels:
      Collection [Map] { CHANNELS },
     roles:
      Collection [Map] { ROLES },
     presences:
      Collection [Map] { PRESENCES },
     deleted: false,
     available: true,
     id: '552025742125563915',
     name: 'Bread and Butter',
     icon: 'c7a815fb3ad48fd44e8dc885c8ec5648',
     splash: null,
     region: 'us-west',
     memberCount: 31,
     large: false,
     features: [],
     applicationID: null,
     afkTimeout: 300,
     afkChannelID: null,
     systemChannelID: '553021131603574789',
     embedEnabled: undefined,
     verificationLevel: 1,
     explicitContentFilter: 1,
     mfaLevel: 0,
     joinedTimestamp: 1552176953544,
     defaultMessageNotifications: 'ALL',
     ownerID: '444384280152637441',
     _rawVoiceStates: Collection [Map] {},
     emojis:
      Collection [Map] { EMOJIS } },
  messages: Collection [Map] {},
  _typing: Map {} }


  ------ NEW ------


  TextChannel {
  type: 'text',
  deleted: false,
  id: '557806629622644757',
  name: 'message-events',
  position: 27, - different
  parentID: '557806629131780116',
  permissionOverwrites:
   Collection [Map] {
     '553026447367995403' => PermissionOverwrites {
       id: '553026447367995403',
       type: 'role',
       deny: 3148800,
       allow: 0,
       denied: [Permissions],
       allowed: [Permissions] },
     '554424972420972586' => PermissionOverwrites {
       id: '554424972420972586',
       type: 'role',
       deny: 3072,
       allow: 0,
       denied: [Permissions],
       allowed: [Permissions] },
     '552025742125563915' => PermissionOverwrites {
       id: '552025742125563915',
       type: 'role',
       deny: 3072,
       allow: 0,
       denied: [Permissions],
       allowed: [Permissions] } },
  topic: null,
  nsfw: false,
  lastMessageID: '561802371919904788',
  guild:
   Guild {
     members:
      Collection [Map] { MEMBERS },
     channels:
      Collection [Map] { CHANNELS },
     roles:
      Collection [Map] { ROLES },
     presences:
      Collection [Map] { PRESENCES },
     deleted: false,
     available: true,
     id: '552025742125563915',
     name: 'Bread and Butter',
     icon: 'c7a815fb3ad48fd44e8dc885c8ec5648',
     splash: null,
     region: 'us-west',
     memberCount: 31,
     large: false,
     features: [],
     applicationID: null,
     afkTimeout: 300,
     afkChannelID: null,
     systemChannelID: '553021131603574789',
     embedEnabled: undefined,
     verificationLevel: 1,
     explicitContentFilter: 1,
     mfaLevel: 0,
     joinedTimestamp: 1552176953544,
     defaultMessageNotifications: 'ALL',
     ownerID: '444384280152637441',
     _rawVoiceStates: Collection [Map] {},
     emojis:
      Collection [Map] { EMOJIS } },
  messages: Collection [Map] {},
  _typing: Map {} }

*/