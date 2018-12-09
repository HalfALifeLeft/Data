module.exports = (client, guild) => {
    const channel = guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    client.channels.get("general")
    channel.send(`I have joined ${guild.name}`);
    console.log(`I have joined ${guild.name} at ${new Date()}`)
};