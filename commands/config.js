/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let configBase = args[0];
    let configName = args[0];
    let configArgs = args.slice(1).join(` `);
    let regExTestOne = RegExp(/<#!?\d+>/);
    let regExTestTwo = RegExp(/<@!?\d+>/);
    let arrayOfConfigs = [`prefix`,
        `mutedRole`,
        `memberLogs`,
        `messageLogs`,
        `serverLogs`,
        `modLogs`,
        `welcomeChannel`,
        `ruleOne`,
        `ruleTwo`,
        `ruleThree`,
        `ruleFour`,
        `ruleFive`,
        `ruleSix`,
        `ruleSeven`,
        `ruleEight`,
        `ruleNine`,
        `ruleTen`
    ];

    if (!message.member.hasPermission(`ADMINISTRATOR`, false, true, true)) {
        return message.reply(`you do not have the \`ADMINISTRATOR\` permission`);
    }


    if (regExTestOne.test(configArgs) === true) {
        configArgs = args[1].replace(`<#`, ``).replace(`>`, ``);
    }

    if (regExTestTwo.test(configArgs) === true) {
        configArgs = args[1].replace(`<@`, ``).replace(`>`, ``);
    }

    await client.dataConfig.ensure(`${message.guild.id}`, {
        prefix: `d!`,
        mutedRole: ``,
        memberLogs: ``,
        messageLogs: ``,
        serverLogs: ``,
        modLogs: ``,
        welcomeChannel: ``,
        suggestChannel: ``,
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

    if (!configArgs || !configName) {
        return message.channel.send(`\`\`\`Blank means it is not set
        prefix => ${client.dataConfig.get(`${message.guild.id}`, `prefix`)}
        mutedRole => ${client.dataConfig.get(`${message.guild.id}`, `mutedRole`)}
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

    if (arrayOfConfigs.includes(configName) == false) {
        return message.reply(`that isn't an option to configure!`);
    }

    client.dataConfig.set(`${message.guild.id}`, `${configArgs}`, `${configName}`);
    message.channel.send(`Config Changed:\`\`\`${configName} => ${configArgs}\`\`\``);

};
module.exports.help = {
    name: `config`
};