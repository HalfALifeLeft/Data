/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require('dotenv').config();
//process.env.[THING TO CALL]

//Calling Packages
const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');
var func = require('./functions.js');

const client = new Discord.Client();
const commands = JSON.parse(fs.readFileSync('Storage/commands.json', 'utf8'));
const config = require('./config.json');
const Message = new Discord.Message();

client.config = config;
client.message = Message;
// 
// To access this do client.func.[FUNCTIONHERE]
// 

client.func = func;

fs.readdir('./events/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		let eventName = file.split('.')[0];
		console.log(`Attempting to load event ${eventName}`);
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Enmap();

fs.readdir('./commands/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split('.')[0];
		console.log(`Attempting to load command ${commandName}`);
		client.commands.set(commandName, props);
	});
});

const responseObject = {
	"Rule 1": "Advertising of any form (without approval from an Admin) is prohibited.",
	"Rule 2": "Keep things SFW unless the channel is marked as NSFW. NSFW content outside of designated channels will not be tolerated and you will be muted.",
	"Rule 3": "All kinds of spamming is prohibited. Repeated pings, message bombs, text spams, etc.",
	"Rule 4": "Keep your drama outside of this server, we don't want it here.",
	"Rule 5": "Harassment of any kind is strictly prohibited and will not be tolerated under and circumstances.",
	"Rule 6": "Treat all Admins and Moderators with the utmost respect.",
	"Rule 7": "Name hoisting is not allowed, if you have an `!` or other character at the front of your name to bring yourself to the top of the list, you will be renamed without notice.",
	"my milk": "IS HARD!"
  };

client.on("message", (message) => {
	if(responseObject[message.content]) {
	  message.channel.send(responseObject[message.content]);
	}
  });

/*
client.on('message', (message) => {
	//message.content.toLowerCase();
	if (message.content.toLowerCase('')) {
		message.channel.send('IS HARD!');
	} 
}); 
*/
client.on('message', message => {
	const prefixMention = new RegExp(`<@!?${client.user.id}>`);
	const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : 'd!';
	if(message.content === prefixMention + prefix) {
		message.reply('my prefix is `' + process.env.PREFIX + '` now stop tagging me.');
	}
});

//Discord Login 
client.login(process.env.TOKEN);