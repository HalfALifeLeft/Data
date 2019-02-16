/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let allowedRole = message.guild.roles.find(r => r.name === `Admins`);
    if (message.member.roles.has(allowedRole.id)) {
        const channelLoggingOne = client.guild.channels.find(channel => channel.name === `member-events` && channel.type == `text`);
        const channelLoggingTwo = client.guild.channels.find(channel => channel.name === `message-events` && channel.type == `text`);
        const channelLoggingThree = client.guild.channels.find(channel => channel.name === `server-events` && channel.type == `text`);
        const channelLoggingFour = client.guild.channels.find(channel => channel.name === `mod-events` && channel.type == `text`);
        const category = client.guild.channels.find(channel => channel.name === `Data Logging Test` && channel.type == `category`);

        if (channelLoggingOne || channelLoggingTwo || channelLoggingThree || channelLoggingFour || category) return message.reply(`At least one logging channel/category I need to create already exists! Please delete any channels by the name of \`
        member-events, message-events, server-events, or mod-events\` or categories called \`Data Logging\` so that I can properly set up logging on this server!`);

        message.guild.createChannel(`Data Logging`, `category`) //make category
            .then(CategoryChannel => {
                message.guild.createChannel(`member-events`, `text`)
                    .then(TextChannel => {
                        TextChannel.setParent(CategoryChannel.id);
                    })
                    .catch((e) => {
                        console.error(e);
                    });
                message.guild.createChannel(`message-events`, `text`)
                    .then(TextChannel => {
                        TextChannel.setParent(CategoryChannel.id);
                    })
                    .catch((e) => {
                        console.error(e);
                    });
                message.guild.createChannel(`server-events`, `text`)
                    .then(TextChannel => {
                        TextChannel.setParent(CategoryChannel.id);
                    })
                    .catch((e) => {
                        console.error(e);
                    });
                message.guild.createChannel(`mod-events`, `text`)
                    .then(TextChannel => {
                        TextChannel.setParent(CategoryChannel.id);
                    })
                    .catch((e) => {
                        console.error(e);
                    });
            });
        message.channel.send(`I have completed setting up the logging channels!`);
    } else {
        return message.reply(`you do not have permission to do this!`);
    }
};
module.exports.help = {
    name: `logs`
};

//USE PROMISES