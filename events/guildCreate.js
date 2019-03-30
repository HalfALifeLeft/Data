/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = (client, guild) => {

    client.dataConfig.ensure(`${guild.id}`, {
        prefix: `d!`,
        mutedRole: ``,
        messageLogs: ``,
        memberLogs: ``,
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


    const generalId = client.dataConfig.get(`${guild.id}`, `welcomeChannel`);
    if (guild.channels.has(generalId) == false) return;

    const channel = guild.channels.find(ch => ch.id === generalId);
    if (!channel) return;
    channel.send(`I have joined ${guild.name}`);
    console.log(`I have joined ${guild.name} at ${new Date()}`);
};