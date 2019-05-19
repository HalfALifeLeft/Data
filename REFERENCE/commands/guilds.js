/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const guilds = client.guilds;
    let allGuilds = [];
    let i = 1;
    const filter = m => m.author.id === message.author.id;

    if (message.author.id != process.env.OWNERID) {
        return;
    }

    await guilds.forEach(async (guild) => {
        let owner = client.fetchUser(guild.ownerID);
        let ownerName = ``;
        let ownerDiscriminator = ``;
        owner.then((User) => {
            ownerName = User.username;
            ownerDiscriminator = User.discriminator;
            allGuilds.push(`${i} - ${guild.name}\n      Guild ID: ${guild.id}\n      Member Count: ${guild.memberCount}\n      Owner: ${ownerName}#${ownerDiscriminator}`);
            i++;
        });
    });

    message.channel.send(`\`\`\`` + allGuilds.join(`\n`).toString() + `\`\`\``)
    .catch(e => {
        console.error(e);
    });

    message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: [`time`]
        })
        .then(async (msg) => {
            let content = await msg.first().content;
            let guild = client.guilds.find(g => g.id == content);

            if (guild == null) {
                return message.reply(`Please give me a valid Guild ID!`);
            }

            guild.systemChannel.createInvite()
                .then((Invite) => {
                    message.member.send(Invite.url);
                })
                .catch((e) => {
                    console.error(e);
                });
        })
        .catch((e) => {
            console.error(e);
        });
};
module.exports.help = {
    name: `guilds`
};

/* 

Guild {
  deleted: false,
  available: true,
  id: '545522878964301825',
  name: 'Data Playground',
  icon: null,
  splash: null,
  region: 'us-west',
  memberCount: 9,
  large: false,
  features: [],
  applicationID: null,
  afkTimeout: 900,
  afkChannelID: null,
  systemChannelID: '545522878964301827',
  embedEnabled: undefined,
  verificationLevel: 1,
  explicitContentFilter: 0,
  mfaLevel: 0,
  joinedTimestamp: 1552872075284,
  defaultMessageNotifications: 'MENTIONS',
  ownerID: '444384280152637441',
  _rawVoiceStates: Collection {},
  emojis: Collection {} }

*/