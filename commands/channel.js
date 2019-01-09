/* eslint-disable no-undef */
exports.run = (client, message, args) => {
	let AllowedRole = message.guild.roles.find(`name`, `Admins`);
	if (!AllowedRole) return;
	message.guild.createChannel(`${args[0]}`, `${args[1]}`);
	message.channel.send(`created ${args[1]} channel by the name of ${args[0]}`);
};