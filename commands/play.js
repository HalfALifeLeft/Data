/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const ytdl = require(`ytdl-core`);

module.exports.run = async (client, message, args) => {

    //check if message author is connected to a voice channel
    if (!message.member.voiceChannel) {
        return message.channel.send(`Please connect to a voice channel.`)
        .catch(e => {
            console.error(e);
        });
    }
        //if not, return

    //check if bot is already connected to a voice channel
    if (message.guild.me.voiceChannel) {
        return message.channel.send(`Sorry, the bot is already connected to the guild.`)
        .catch(e => {
            console.error(e);
        });
    }
    //Check if message.author inputs a URL
    if (!args[0]) {
        return message.channel.send(`Please give me a URL to play!`)
        .catch(e => {
            console.error(e);
        });
    } 
    //Validate Info
    let validate = await ytdl.validateURL(args[0]);

    //Check Validation
    if (!validate) {
        return message.channel.send(`Please give me a valid URL!`)
        .catch(e => {
            console.error(e);
        });
    }
    //Validate will contain a boolean if the url is valid or not

    //Fetch video info
    let info = await ytdl.getInfo(args[0]);

    //Store author's guild channel
    let connection = await message.member.voiceChannel.join();

    //Play song
    let dispatcher = await connection.playStream(ytdl(args[0], {
        filter: `audioonly`
    }));
    //dispatcher will be used later

    //Output now playing
    message.channel.send(`Now playing: ${info.title}`)
    .catch(e => {
        console.error(e);
    });

};
module.exports.help = {
    name: `play`
};