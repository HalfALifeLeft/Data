/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = async (client, oldMember, newMember) => {

          client.dataConfig.ensure(`${newMember.guild.id}`, {
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

    const channelId = client.dataConfig.get(`${newMember.guild.id}`, `memberLogs`);
    if (newMember.guild.channels.has(channelId) == false) return;

    const mychannel = newMember.guild.channels.find(channel => channel.id === channelId);
    if (mychannel == null) return;

    const {
        Client,
        RichEmbed
    } = require(`discord.js`);

    let voiceChannelName = newMember.voiceChannel;

    if (voiceChannelName == undefined) {
        voiceChannelName = oldMember.voiceChannel.name;
    } else {
        voiceChannelName = newMember.voiceChannel.name;
    }

    const embed = new RichEmbed()
        .setTimestamp()
        .setColor(process.env.GOOD)
        .setFooter(`VC: ${voiceChannelName}`);


    if(oldMember.selfMute != newMember.selfMute && oldMember.selfDeaf == newMember.selfDeaf) {
        if(newMember.selfMute == true) {
            embed.addField(`User Muted Themselves`, `<@!${newMember.user.id}> (\`${newMember.user.id}\`)`);
        }
        if(newMember.selfMute == false) {
            embed.addField(`User Un-Muted Themselves`, `<@!${newMember.user.id}> (\`${newMember.user.id}\`)`);
        }
    }

    if(oldMember.selfDeaf != newMember.selfDeaf) {
        if(newMember.selfDeaf == true) {
            embed.addField(`User Deafened Themselves`, `<@!${newMember.user.id}> (\`${newMember.user.id}\`)`);
        }
        if(newMember.selfDeaf == false) {
            embed.addField(`User Un-Deafened Themselves`, `<@!${newMember.user.id}> (\`${newMember.user.id}\`)`);
        }
    }

    //console.log(newMember);

    if(oldMember.voiceChannelID != newMember.voiceChannelID) {
        if(newMember.voiceChannelID == null) {
            embed.addField(`User left Voice Channel`, `<@!${oldMember.user.id}> (\`${oldMember.user.id}\`)`);
        }
        if(oldMember.voiceChannelID == null) {
            embed.addField(`User joined Voice Channel`, `<@!${newMember.user.id}> (\`${newMember.user.id}\`)`);
        }
        if(oldMember.voiceChannelID != newMember.voiceChannelID && oldMember.voiceChannelID != null && newMember.voiceChannelID != null) {
            embed.addField(`User moved Voice Channel`, `Old VC: ${oldMember.voiceChannel.name} (\`${oldMember.voiceChannel.id}\`)\nNew VC: ${newMember.voiceChannel.name} (\`${newMember.voiceChannel.id}\`)\n<@!${newMember.user.id}> (\`${newMember.user.id}\`)`);
        }
    }
    mychannel.send(embed);
};

/*

GuildMember {
  guild:
   Guild {
     deleted: false,
     available: true,
     id: '545522878964301825',
     name: 'Data Playground',
     icon: null,
     splash: null,
     region: 'us-west',
     memberCount: 8,
     large: false,
     features: [],
     applicationID: null,
     afkTimeout: 900,
     afkChannelID: '545522878964301829',
     systemChannelID: '545522878964301827',
     embedEnabled: undefined,
     verificationLevel: 1,
     explicitContentFilter: 0,
     mfaLevel: 0,
     joinedTimestamp: 1550133372857,
     defaultMessageNotifications: 'MENTIONS',
     ownerID: '444384280152637441',
     _rawVoiceStates: Collection [Map] { '387044261188861952' => [Object] },
     emojis: Collection [Map] {} },
  joinedTimestamp: 1552959395319,
  _roles: [ '546189159958577166' ],
  serverDeaf: false,
  serverMute: false,
  selfMute: false,
  selfDeaf: false,
  voiceSessionID: 'fd08b551a5bd89b1943835337d7973c3',
  voiceChannelID: '557730620617523232',
  speaking: false,
  nickname: null,
  lastMessageID: null,
  lastMessage: null,
  deleted: false }
------
GuildMember {
  guild:
   Guild {
     deleted: false,
     available: true,
     id: '545522878964301825',
     name: 'Data Playground',
     icon: null,
     splash: null,
     region: 'us-west',
     memberCount: 8,
     large: false,
     features: [],
     applicationID: null,
     afkTimeout: 900,
     afkChannelID: '545522878964301829',
     systemChannelID: '545522878964301827',
     embedEnabled: undefined,
     verificationLevel: 1,
     explicitContentFilter: 0,
     mfaLevel: 0,
     joinedTimestamp: 1550133372857,
     defaultMessageNotifications: 'MENTIONS',
     ownerID: '444384280152637441',
     _rawVoiceStates: Collection [Map] { '387044261188861952' => [Object] },
     emojis: Collection [Map] {} },
  joinedTimestamp: 1552959395319,
  _roles: [ '546189159958577166' ],
  serverDeaf: false,
  serverMute: false,
  selfMute: true,
  selfDeaf: false,
  voiceSessionID: 'fd08b551a5bd89b1943835337d7973c3',
  voiceChannelID: '557730620617523232',
  speaking: false,
  nickname: null,
  lastMessageID: null,
  lastMessage: null,
  deleted: false }

*/