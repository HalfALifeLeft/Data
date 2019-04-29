/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    let setChannel = args[0];
    let setChannelTwo = ``;
    let setChannelID = args[1];
    let arrayOfItems = [`suggestions`, `welcome`];
    let guildID = message.guild.id;

    if (args[1]) {
        setChannelID = args[1].replace(`<#`, ``).replace(`>`, ``);
    }

    if (!message.member.hasPermission(`ADMINISTRATOR`, false, true, true)) {
        return message.reply(`you do not have the \`ADMINISTRATOR\` permission`);
    }

    await client.func.ensure(client, guildID);

    if (!setChannel) {
        return message.reply(`Captain, what should I set? (\`MISSING_SETCHANNEL_ARG\`)`);
    }

    if (!arrayOfItems.includes(setChannel)) {
        return message.reply(`Captain that doesn't work! (\`INVALID_SETCHANNEL_ARG\`)`);
    }

    if (!setChannelID) {
        return message.reply(`Captain, what channel should I set ${setChannel} to? (\`MISSING_SETCHANNELID_ARG\`)`);
    }

    if (!message.guild.channels.find(c => c.id === setChannelID)) {
        return message.reply(`Captain that isn't a channel! (\`INVALID_SETCHANNELID_ARG\`)`);
    }

    if (setChannel == `suggestions`) {
        setChannelTwo = `suggestChannel`;
    } else if (setChannel == `welcome`) {
        setChannelTwo = `welcomeChannel`;
    }

    client.dataConfig.set(`${message.guild.id}`, `${setChannelID}`, `${setChannelTwo}`);
    message.channel.send(`Captain, I have set ${setChannel} channel to <#${setChannelID}>.`);

};
module.exports.help = {
    name: `channel`
};