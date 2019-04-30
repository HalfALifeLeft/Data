/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission(`ADMINISTRATOR`, false, true, true)) {
        return message.reply(`You are missing the required \`ADMINISTRATOR\` permissions.`)
        .catch(e => {
            console.error(e);
        });
    }

    if (!message.guild.me.hasPermission([`MANAGE_CHANNELS`, `MOVE_MEMBERS`])) {
        return message.reply(`Missing the required \`Manage Channels\` and \`Move Members\` permissions.`)
        .catch(e => {
            console.error(e);
        });
    }
    const member = message.mentions.members.first();
    if (!member) return message.reply(`You need to @mention a user/bot to kick from the voice channel.`);
    if (!member.voiceChannel) return message.reply(`That user/bot isn't in a voice channel.`);

    const temp_channel = await message.guild.createChannel(member.id, `voice`, [{
            id: message.guild.id,
            deny: [`VIEW_CHANNEL`, `CONNECT`, `SPEAK`],
        },
        {
            id: member.id,
            deny: [`VIEW_CHANNEL`, `CONNECT`, `SPEAK`]
        }
    ]);
    await member.setVoiceChannel(temp_channel)
    .catch(e => {
        console.error(e);
    });

    await temp_channel.delete()
    .catch(e => {
        console.error(e);
    });

    message.react(`👌`)
    .catch(e => {
        console.error(e);
    });

};
module.exports.help = {
    name: `vckick`
};