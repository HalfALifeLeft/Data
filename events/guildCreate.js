/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = (client, guild) => {
	const channel = guild.channels.find(ch => ch.name === `general`);
	if (!channel) return;
	channel.send(`I have joined ${guild.name}`);
	console.log(`I have joined ${guild.name} at ${new Date()}`);
};