exports.run = (client, message, args) => {
    let arrayOfID = ['444384280152637441'];
	if (!arrayOfID.includes(message.author.id)) return;
    message.guild.createChannel(`${args[0]}`, `${args[1]}`);
    message.channel.send(`done!`);
};