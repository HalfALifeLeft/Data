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
        return message.reply(`Please tell me what to configure!`);
    }

    if (!arrayOfItems.includes(setChannel)) {
        return message.reply(`Thats not a valid item to configure!`);
    }

    if (!setChannelID) {
        return message.reply(`Please tell me what channel to configure!`);
    }

    if (!message.guild.channels.find(c => c.id === setChannelID)) {
        return message.reply(`Thats not a valid channel, please give me a valid channel!`);
    }

    if (setChannel == `suggestions`) {
        setChannelTwo = `suggestChannel`;
    } else if (setChannel == `welcome`) {
        setChannelTwo = `welcomeChannel`;
    }

    client.dataConfig.set(`${message.guild.id}`, `${setChannelID}`, `${setChannelTwo}`);
    message.channel.send(`${setChannel} channel changed to <#${setChannelID}>.`);

};
module.exports.help = {
    name: `channel`
};