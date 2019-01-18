/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
exports.run = (client, message, args, msg, cmd) => {
	const fs = require(`fs`);
	const prefix = `d!`;
	const commands = JSON.parse(fs.readFileSync(`Storage/commands.json`, `utf8`));
	const Discord = require(`discord.js`);
	if (msg === `${prefix}help`) { // If they only type this, lets ONLY show the commands for regular users
		// Start of the embed
		const embed = new Discord.RichEmbed() 
			.setColor(client.func.hexcode); 
		// Variables
		let commandsFound = 0; 
		for (var cmd in commands) { 
			// Checks if the group is "users" - and replace type with group
			if (commands[cmd].group.toUpperCase() === `USER`) {
				// Lets also count commandsFound + 1 every time it finds a command in the group
				commandsFound++;
				// Lets add the command field to the embed
				embed.addField(`${commands[cmd].name}`, `**Description:** ${commands[cmd].desc}\n**Usage:** ${prefix + commands[cmd].usage}`); 
			}
		}
		// Add some more to the embed - we need to move that out of the for loop.
		embed.setFooter(`Currently showing user commands. To view another group do ${prefix}help [group / command]`);
		embed.setDescription(`**${commandsFound} commands found** - <> means required, [] means optional`);
		// send to DMs
		message.author.send({embed});
		// Post in chat that sent to DMs
		message.channel.send({embed: {
			color: client.func.hexcode, 
			description: `**Check your DMs ${message.author}!**`
		}});
	} else if (args.join(` `).toUpperCase() === ``) {
		// Variables
		let groups = ``;
		for (var cmd in commands) {
			if (!groups.includes(commands[cmd].group)) {
				groups += `${commands[cmd].group}\n`;
			}
		}
		message.channel.send({embed: {
			description:`**${groups}**`,
			title:`Groups`,
			color: client.func.hexcode,
		}});
		return;
	} else {
		// Variables
		let groupFound = ``;
		for (var cmd in commands) { // This will see if there is a group named after what the user entered.
			if (args.join(` `).trim().toUpperCase() === commands[cmd].group.toUpperCase()) {
				groupFound = commands[cmd].group.toUpperCase(); 
				break;
			}
		}
		if (groupFound != ``) { // If a group is found, run this statement.
			// Start of the embed
			const embed = new Discord.RichEmbed()
				.setColor(client.func.hexcode);
			// Variables
			let commandsFound = 0; 
			for (var cmd in commands) { 
				// Checks if the group is "users" - and replace type with group
				if (commands[cmd].group.toUpperCase() === groupFound) {
					// Lets also count commandsFound + 1 every time it finds a command in the group
					commandsFound++;
					// Lets add the command field to the embed
					embed.addField(`${commands[cmd].name}`, `**Description:** ${commands[cmd].desc}\n**Usage:** ${prefix + commands[cmd].usage}`); // This will output something like <commandname>[title] [newline] desc: <description> [newline] usage: <usage
				}
			}
			// Add some more to the embed - we need to move that out of the for loop.
			embed.setFooter(`Currently showing ${groupFound} commands. To view another group do ${prefix}help [group / command]`);
			embed.setDescription(`**${commandsFound} commands found** - <> means required, [] means optional`);

			// We can output it two ways. 1 - Send to DMs, and tell them that they sent to DMs in chat. 2 - Post commands in chat. [since commands take up a lot let's send to DMs]
			message.author.send({embed});
			// Post in chat they sent to DMs
			message.channel.send({embed: {
				color: client.func.hexcode,
				description: `**Check your DMs ${message.author}!**`
			}});
			// Make sure you copy and paste into the right place, lets test it now!
			return; // We want to make sure we return so it doesnt run the rest of the script after it finds a group! Lets test it!
			// Now lets show groups.
		}
		// Although, if a group is not found, lets see if it is a command
		// Variables
		let commandFound = ``;
		let commandDesc = ``;
		let commandUsage = ``;
		let commandGroup = ``;
		for (var cmd in commands) { // Copy and paste
			if (args.join(` `).trim().toUpperCase() === commands[cmd].name.toUpperCase()) {
				commandFound = commands[cmd].name; // Lets change this so it doesnt make it go uppcase
				commandDesc = commands[cmd].desc;
				commandUsage = commands[cmd].usage;
				commandGroup = commands[cmd].group;
				break;
			}
		}
		// Lets post in chat if nothing is found!
		if (commandFound === ``) {
			message.channel.send({embed: {
				description:`**No group or command found titled \`${args.join(` `)}\`**`,
				color: client.func.hexcode,
			}});
		}
		// Since this one is smaller, lets send the embed differently.
		message.channel.send({embed: {
			title:`<> means required, [] means optional`,
			color: client.func.hexcode,
			fields: [{
				name:commandFound,
				value:`**Description:** ${commandDesc}\n**Usage:** ${commandUsage}\n**Group:** ${commandGroup}`
			}]
		}});
		return; // We want to return here so that it doesnt run the rest of the script also.
	}
};