/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    let allowedRole = message.guild.roles.find(r => r.name === `Admins`);
    if (message.member.roles.has(allowedRole.id)) {
        const channelLoggingOne = client.channels.find(channel => channel.name === `member-events` && channel.type == `text`);
        const channelLoggingTwo = client.channels.find(channel => channel.name === `message-events` && channel.type == `text`);
        const channelLoggingThree = client.channels.find(channel => channel.name === `server-events` && channel.type == `text`);
        const channelLoggingFour = client.channels.find(channel => channel.name === `mod-events` && channel.type == `text`);
        const category = client.channels.find(channel => channel.name === `Data Logging` && channel.type == `category`);

        if (channelLoggingOne || channelLoggingTwo || channelLoggingThree || channelLoggingFour || category) return message.reply(`At least one logging channel/category I need to create already exists! Please delete any channels by the name of \`
        member-events, message-events, server-events, or mod-events\` or categories called \`Data Logging\` so that I can properly set up logging on this server!`);

        client.func.createChannel(message, `member-events`);
        client.func.createChannel(message, `message-events`);
        client.func.createChannel(message, `server-events`);
        client.func.createChannel(message, `mod-events`);
        client.func.createCategory(message, `Data Logging`);
        setTimeout(() => {
            if (category && channelLoggingOne) channelLoggingOne.setParent(category.id);
            if (category && channelLoggingTwo) channelLoggingTwo.setParent(category.id);
            if (category && channelLoggingThree) channelLoggingThree.setParent(category.id);
            if (category && channelLoggingFour) channelLoggingFour.setParent(category.id);
        }, 1500);
    } else {
        return message.reply(`you do not have permission to do this!`);
    }
};