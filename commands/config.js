/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let AllowedRole = message.guild.roles.find(r => r.name == `Admins`);
    let configName = args[0];
    let configArgs = args[1];
    let regExTest = RegExp(/<#!?\d+>/);

    if (message.member.roles.has(AllowedRole.id) === false) {
        return;
    }

    if (regExTest.test(configArgs) === true) {
        configArgs = args[1].replace(`<#`, ``).replace(`>`, ``);
        console.log(configArgs);
    }

    if (!client.dataConfig.get(`${message.guild.id}`)) {
        //if guild ID is not in the enmap, add it to enmap
        await client.dataConfig.set(`${message.guild.id}`, {
            prefix: `dd!`,
            messageLogs: ``,
            memberLogs: ``,
            serverLogs: ``,
            modLogs: ``
        });
    }

    if (!configArgs || !configName) {
        return message.channel.send(`\`\`\`Blank means it is not set\nprefix => ${client.dataConfig.get(`${message.guild.id}`, `prefix`)}\nmessageLogs => ${client.dataConfig.get(`${message.guild.id}`, `messageLogs`)}\nmemberLogs => ${client.dataConfig.get(`${message.guild.id}`, `memberLogs`)}\nserverLogs => ${client.dataConfig.get(`${message.guild.id}`, `serverLogs`)}\nmodLogs => ${client.dataConfig.get(`${message.guild.id}`, `modLogs`)}\n\`\`\``);
    }
    if (!configArgs) {
        return message.reply(`You are either missing an argument`);
    }
    if (!configName) {
        return message.reply(`You are either missing a name`);
    }

    client.dataConfig.set(`${message.guild.id}`, `${configArgs}`, `${configName}`);
    message.channel.send(`Config Changed:\`\`\`${configName} => ${configArgs}\`\`\``);

};
module.exports.help = {
    name: `config`
};