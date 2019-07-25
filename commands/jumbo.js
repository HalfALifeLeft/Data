/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    
    emoteRaw = args[0];
    emoteArray = emoteRaw.split(`:`);
    emoteID = emoteArray[2].replace(`>`,``);

    if (emoteArray[0] == `<a`) {
        message.reply(`https://cdn.discordapp.com/emojis/${emoteID}.gif`);        
    } else {
        message.reply(`https://cdn.discordapp.com/emojis/${emoteID}.png`);
    }
    
};
module.exports.help = {
    name: `jumbo`
};