/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    let setRuleNumber = args[0];
    let setRule = args.slice(1).join(` `);

    if (!message.member.hasPermission(`ADMINISTRATOR`, false, true, true)) {
        return message.reply(`you do not have the \`ADMINISTRATOR\` permission`)
        .catch(e => {
            console.error(e);
        });
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

    if (isNaN(setRuleNumber) == true) {
        return message.reply(`Filler text 1`)
        .catch(e => {
            console.error(e);
        });
    }

    if (1 > setRuleNumber || setRuleNumber > 10) {
        return message.reply(`Filler text 2`)
        .catch(e => {
            console.error(e);
        });
    }

    if (setRuleNumber == 1) {
        setRuleNumber = `One`;
    }

    if (setRuleNumber == 2) {
        setRuleNumber = `Two`;
    }
    
    if (setRuleNumber == 3) {
        setRuleNumber = `Three`;
    }

    if (setRuleNumber == 4) {
        setRuleNumber = `Four`;
    }
    
    if (setRuleNumber == 5) {
        setRuleNumber = `Five`;
    }
    
    if (setRuleNumber == 6) {
        setRuleNumber = `Six`;
    }

    if (setRuleNumber == 7) {
        setRuleNumber = `Seven`;
    }

    if (setRuleNumber == 8) {
        setRuleNumber = `Eight`;
    }

    if (setRuleNumber == 9) {
        setRuleNumber = `Nine`;
    }

    if (setRuleNumber == 10) {
        setRuleNumber = `Ten`;
    }

    if (!setRule) {
        return message.reply(`You can't make a blank rule!`)
        .catch(e => {
            console.error(e);
        });
    }

    client.dataConfig.set(`${message.guild.id}`, `${setRule}`, `rule${setRuleNumber}`);
    message.channel.send(`Rule ${setRuleNumber} changed to \`${setRule}\`.`)
    .catch(e => {
        console.error(e);
    });

};
module.exports.help = {
    name: `rule`
};