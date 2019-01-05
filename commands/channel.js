exports.run = (client, message, args) => {
    let arrayOfID = message.guild.roles.find('name', 'Admins');
	if (!arrayOfID) return;
    message.guild.createChannel(`${args[0]}`, `${args[1]}`);
    message.channel.send(`done!`);
};