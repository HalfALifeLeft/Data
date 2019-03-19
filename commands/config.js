/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let AllowedRole = message.guild.roles.find(r => r.name == `Admins`);
    let configName = args[0];
    let configArgs = args.slice(1).join(` `);
    let regExTest = RegExp(/<#!?\d+>/);

    if (!message.member.hasPermission(`ADMINISTRATOR`, false, true, true)) {
        return message.reply(`you do not have the \`ADMINISTRATOR\` permission`);
    }

    if (regExTest.test(configArgs) === true) {
        configArgs = args[1].replace(`<#`, ``).replace(`>`, ``);
    }

    if (!client.dataConfig.get(`${message.guild.id}`)) {
        //if guild ID is not in the enmap, add it to enmap
        await client.dataConfig.set(`${message.guild.id}`, {
            prefix: `dd!`,
            memberLogs: ``,
            messageLogs: ``,
            serverLogs: ``,
            modLogs: ``,
            welcomeChannel: ``,
            ruleOne: ``,
            ruleTwo: ``,
            ruleThree: ``,
            ruleFour: ``,
            ruleFive: ``,
            ruleSix: ``,
            ruleSeven: ``,
            ruleEight: ``,
            ruleNine: ``,
            ruleTen: ``
        });
    }

    if (!configArgs || !configName) {
        return message.channel.send(`\`\`\`Blank means it is not set
        prefix => ${client.dataConfig.get(`${message.guild.id}`, `prefix`)}
        memberLogs => ${client.dataConfig.get(`${message.guild.id}`, `memberLogs`)}
        messageLogs => ${client.dataConfig.get(`${message.guild.id}`, `messageLogs`)}
        serverLogs => ${client.dataConfig.get(`${message.guild.id}`, `serverLogs`)}
        modLogs => ${client.dataConfig.get(`${message.guild.id}`, `modLogs`)}
        welcomeChannel => ${client.dataConfig.get(`${message.guild.id}`, `welcomeChannel`)}
        ruleOne => ${client.dataConfig.get(`${message.guild.id}`, `ruleOne`)}
        ruleTwo => ${client.dataConfig.get(`${message.guild.id}`, `ruleTwo`)}
        ruleThree => ${client.dataConfig.get(`${message.guild.id}`, `ruleThree`)}
        ruleFour => ${client.dataConfig.get(`${message.guild.id}`, `ruleFour`)}
        ruleFive => ${client.dataConfig.get(`${message.guild.id}`, `ruleFive`)}
        ruleSix => ${client.dataConfig.get(`${message.guild.id}`, `ruleSix`)}
        ruleSeven => ${client.dataConfig.get(`${message.guild.id}`, `ruleSeven`)}
        ruleEight => ${client.dataConfig.get(`${message.guild.id}`, `ruleEight`)}
        ruleNine => ${client.dataConfig.get(`${message.guild.id}`, `ruleNine`)}
        ruleTen => ${client.dataConfig.get(`${message.guild.id}`, `ruleTen`)}\`\`\``);
    }
    if (!configArgs) {
        return message.reply(`You are missing an argument`);
    }
    if (!configName) {
        return message.reply(`You are missing a name`);
    }

    client.dataConfig.set(`${message.guild.id}`, `${configArgs}`, `${configName}`);
    message.channel.send(`Config Changed:\`\`\`${configName} => ${configArgs}\`\`\``);

};
module.exports.help = {
    name: `config`
};