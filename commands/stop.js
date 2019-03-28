/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

//This command leaves the channel and stops playing, if it is connected/playing

module.exports.run = async (client, message, args) => {

    //Check if author is connected to a voiceChannel
    if (!message.member.voiceChannel) return message.channel.send(`Please connect to a voice channel.`);

    //Check if bot is connected to a voiceChannel
    if (!message.guild.me.voiceChannel) return message.channel.send(`Sorry, the bot isn\`t connected to the guild.`);

    //Check is the author and bot are in the same channel
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(`Sorry, you aren\`t connected to the same channel as the bot.`);

    //Leave the voice channel
    message.guild.me.voiceChannel.leave();

    //Send message
    message.channel.send(`I have left the channel.`);

};
module.exports.help = {
    name: `stop`
};