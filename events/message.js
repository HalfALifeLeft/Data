/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports = async (client, message) => {

    // Ignore all bots
    if (message.author.bot || !message.guild) return;

    client.dataConfig.ensure(`${message.guild.id}`, {
        prefix: `d!`,
        messageLogs: ``,
        memberLogs: ``,
        serverLogs: ``,
        modLogs: ``,
        welcomeChannel: ``
    });
    const dataPrefix = client.dataConfig.get(`${message.guild.id}`, `prefix`);

    const key = `${message.author.id}-${message.guild.id}`;

    client.currency.ensure(key, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1,
        lastSeen: new Date()
    });

    // Increment the points and save them.
    client.currency.inc(key, `points`);

    // Calculate the user's current level
    const curLevel = Math.floor(0.02 * Math.sqrt(client.currency.get(key, `points`)));

    // Act upon level up by sending a message and updating the user's level in enmap.
    if (client.currency.get(key, `level`) < curLevel) {
        message.reply(`You've leveled up to level **${curLevel}**!`)
        .catch(e => {
            console.error(e);
        });
        client.currency.set(key, curLevel, `level`);
    }

    // Ignore messages not starting with the prefix
    if (message.content.toLowerCase().indexOf(dataPrefix) !== 0) return;
    // Our standard argument/command name definition.
    const args = message.content.slice(dataPrefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
    // Run the command
    cmd.run(client, message, args);
};