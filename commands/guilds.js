/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const guilds = client.guilds
    let allGuilds = [];
      
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
          console.log(ownerName + `#` + ownerDiscriminator);
        allGuilds.push(`${guild.name} - ${guild.id}\n    Member Count: ${guild.memberCount}\n    Owner: ${ownerName}#${ownerDiscriminator}`);
      });
    });
  
    message.channel.send(`\`\`\`` + allGuilds.toString().replace(`,`, `\n`) + `\`\`\``);
  
  //^ need to make a new variable that already is the string. Then replace for that, with a .forEach
  
  
  
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