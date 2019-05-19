module.exports = (client) => {
    client.users.find(u => u.id === `444384280152637441`).send(`Bot started up/restarted!`);
    // eslint-disable-next-line no-console
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);

    client.user.setPresence({
            game: {
                name: `on the USS Enterprise`
            },
            status: `online`
        })
        // eslint-disable-next-line no-console
        .catch(console.error);
};