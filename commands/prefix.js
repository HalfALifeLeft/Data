/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    let setPrefix = args[0];

    if (!message.member.hasPermission(`ADMINISTRATOR`, false, true, true)) {
        return message.reply(`you do not have the \`ADMINISTRATOR\` permission`);
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

    let prefix = client.dataConfig.get(`${message.guild.id}`, `prefix`);

    if (prefix == ``) {
        prefix = `Captain, this was set to nothing! @mention me and set this to something using the @mention as the prefix! (\`ERR_BLANK_PREFIX\`)`;
    }

    if (!setPrefix) {
        return message.channel.send(`The prefix is \`${prefix}\``);
    }

    client.dataConfig.set(`${message.guild.id}`, `${setPrefix}`, `prefix`);
    message.channel.send(`Prefix changed to \`${setPrefix}\`.`);

};
module.exports.help = {
    name: `prefix`
};