/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let allowedRole = message.guild.roles.find(r => r.name === `Admins`);
    if (message.member.roles.has(allowedRole.id)) {
        const channelLoggingOne = client.channels.find(channel => channel.name === `member-event` && channel.type == `text`);
        const channelLoggingTwo = client.channels.find(channel => channel.name === `message-event` && channel.type == `text`);
        const channelLoggingThree = client.channels.find(channel => channel.name === `server-event` && channel.type == `text`);
        const channelLoggingFour = client.channels.find(channel => channel.name === `mod-event` && channel.type == `text`);
        const category = client.channels.find(channel => channel.name === `Data Logging Test` && channel.type == `category`);

        if (channelLoggingOne || channelLoggingTwo || channelLoggingThree || channelLoggingFour || category) return message.reply(`At least one logging channel/category I need to create already exists! Please delete any channels by the name of \`
        member-events, message-events, server-events, or mod-events\` or categories called \`Data Logging\` so that I can properly set up logging on this server!`);

        client.func.createChannel(message, `member-event`);
        client.func.createChannel(message, `message-event`);
        client.func.createChannel(message, `server-event`);
        client.func.createChannel(message, `mod-event`);
        client.func.createCategory(message, `Data Logging Test`);
        setTimeout(() => {
            if (category && channelLoggingOne) channelLoggingOne.setParent(category.id);
            if (category && channelLoggingTwo) channelLoggingTwo.setParent(category.id);
            if (category && channelLoggingThree) channelLoggingThree.setParent(category.id);
            if (category && channelLoggingFour) channelLoggingFour.setParent(category.id);
        }, 3000);
        console.log(channelLoggingOne);
        console.log(channelLoggingTwo);
        console.log(channelLoggingThree);
        console.log(channelLoggingFour);
        console.log(category);
    } else {
        return message.reply(`you do not have permission to do this!`);
    }
};
module.exports.help = {
    name: `logs`
};

//USE PROMISES