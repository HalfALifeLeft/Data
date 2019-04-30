/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */

//This command leaves the channel and stops playing, if it is connected/playing

module.exports.run = async (client, message, args) => {

    //Check if author is connected to a voiceChannel
    if (!message.member.voiceChannel) {
        return message.channel.send(`Please connect to a voice channel.`)
        .catch(e => {
            console.error(e);
        });
    }
    //Check if bot is connected to a voiceChannel
    if (!message.guild.me.voiceChannel) {
        return message.channel.send(`Sorry, the bot isn\`t connected to the guild.`)
        .catch(e => {
            console.error(e);
        });
    }
    //Check is the author and bot are in the same channel
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) {
        return message.channel.send(`Sorry, you aren\`t connected to the same channel as the bot.`)
        .catch(e => {
            console.error(e);
        });
    }
    //Leave the voice channel
    message.guild.me.voiceChannel.leave()
    .catch(e => {
        console.error(e);
    });

    //Send message
    message.channel.send(`I have left the channel.`)
    .catch(e => {
        console.error(e);
    });

};
module.exports.help = {
    name: `stop`
};