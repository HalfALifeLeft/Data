/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let memberChannel = args[0];
    let messageChannel = args[1];
    let serverChannel = args[2];
    let modChannel = args[3];
    let prefix = client.dataConfig.get(`${message.guild.id}`, `prefix`);
    if (!memberChannel || !messageChannel || !serverChannel || !modChannel) return message.reply(`You need to define 4 channel names! \`${prefix}logs [Member Logging Channel] [Message Logging Channel] [Server Logging Channel] [Mod Logging Channel]\``);
    if (message.member.hasPermission(`ADMINISTRATOR`)) {
        const channelLoggingOne = message.guild.channels.find(channel => channel.name === memberChannel && channel.type == `text`);
        const channelLoggingTwo = message.guild.channels.find(channel => channel.name === messageChannel && channel.type == `text`);
        const channelLoggingThree = message.guild.channels.find(channel => channel.name === serverChannel && channel.type == `text`);
        const channelLoggingFour = message.guild.channels.find(channel => channel.name === modChannel && channel.type == `text`);
        const category = message.guild.channels.find(channel => channel.name === `Data Logging Test` && channel.type == `category`);

        if (channelLoggingOne || channelLoggingTwo || channelLoggingThree || channelLoggingFour || category) {
            return message.reply(`At least one logging channel/category I need to create already exists! Please delete any channels by the name of \`${memberChannel}, ${messageChannel}, ${serverChannel}, or ${modChannel}\` or categories called \`Data Logging Test\` so that I can properly set up logging on this server!`)
            .catch((e) => {
                console.error(e);
            });
        }

        message.guild.createChannel(`Data Logging`, `category`) //make category
            .then(CategoryChannel => {
                message.guild.createChannel(memberChannel, `text`)
                    .then(TextChannel => {
                        TextChannel.setParent(CategoryChannel.id);
                        client.dataConfig.set(`${message.guild.id}`, `${TextChannel.id}`, `memberLogs`);
                    })
                    .catch((e) => {
                        console.error(e);
                    });
                message.guild.createChannel(messageChannel, `text`)
                    .then(TextChannel => {
                        TextChannel.setParent(CategoryChannel.id);
                        client.dataConfig.set(`${message.guild.id}`, `${TextChannel.id}`, `messageLogs`);

                    })
                    .catch((e) => {
                        console.error(e);
                    });
                message.guild.createChannel(serverChannel, `text`)
                    .then(TextChannel => {
                        TextChannel.setParent(CategoryChannel.id);
                        client.dataConfig.set(`${message.guild.id}`, `${TextChannel.id}`, `serverLogs`);
                    })
                    .catch((e) => {
                        console.error(e);
                    });
                message.guild.createChannel(modChannel, `text`)
                    .then(TextChannel => {
                        TextChannel.setParent(CategoryChannel.id);
                        client.dataConfig.set(`${message.guild.id}`, `${TextChannel.id}`, `modLogs`);
                    })
                    .catch((e) => {
                        console.error(e);
                    });
            });
        message.channel.send(`I have completed setting up the logging channels and have added them to the configurations!`)
        .catch(e => {
            console.error(e);
        });
    } else {
        return message.reply(`you do not have permission to do this!`)
        .catch(e => {
            console.error(e);
        });
    }
};
module.exports.help = {
    name: `logs`
};