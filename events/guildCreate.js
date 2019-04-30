/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-console */
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
    channel.send(`I have joined ${guild.name}`)
    .catch(e => {
        console.error(e);
    });
    console.log(`I have joined ${guild.name} at ${new Date()}`);
};