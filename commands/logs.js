exports.run = (client, message, args, msg, cmd, sender, config, tools, DataHexcode) => {
    const server = require('discord.js');
    
    server.createChannel('logs', 'category', [{
        id: server.id,
        deny: ['MANAGE_MESSAGES'],
        allow: ['SEND_MESSAGES']
      }])
        .then(console.log)
        .catch(console.error);
}
//create category = Data Logging
//create channel = 
/*

channelCreate.js
channelDelete.js
channelUpdate.js
guideBanAdd.js
guildBanRemove.js
messageDelete.js
messageUpdate.js

*/
