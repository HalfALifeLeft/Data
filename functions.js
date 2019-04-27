/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

exports.hexcode = 0xf2c300;

exports.ping = (client) => {
    return Math.round(client.ping);
};

exports.example = (a, b) => {
    if (a && b) {
        return a + b;
    }
    return undefined;
}; 

exports.ensure = async (client, guildID) => {
    await client.dataConfig.ensure(`${guildID}`, {
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
};
/*
function hexcode() {
	return 0xf2c300;
}

function ping(client) {
	return Math.round(client.ping);
}
*/