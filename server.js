/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require(`dotenv`).config();
//process.env.[THING TO CALL]

//Calling Packages
const Discord = require(`discord.js`);
const Enmap = require(`enmap`);
const express = require(`./express.js`);
const fs = require(`fs`);
var func = require(`./functions.js`);

const client = new Discord.Client();
const commands = JSON.parse(fs.readFileSync(`Storage/commands.json`, `utf8`));
const config = require(`./config.json`);
const Message = new Discord.Message();
var stringSimilarity = require(`string-similarity`);

/*client.settings = new Enmap({
    name: `settings`,
    fetchAll: false,
    autoFetch: true,
    cloneLevel: `deep`
});

const defaultSettings = {
    prefix: `d!`,
    memberLogChannel: `member-events`,
    messageLogChannel: `message-events`,
    serverLogChannel: `server-events`,
    modLogChannel: `mod-events`,
    modRole: `Mods`,
    adminRole: `Admins`,
    welcomeChannel: `general`,
    welcomeMessage: `Welcome into the server <@{{user}}>!`
};

client.defaultSettings = defaultSettings;*/
client.config = config;
client.message = Message;
client.stringSimilarity = stringSimilarity;
client.fs = fs;
// 
// To access this do client.func.[FUNCTIONHERE]
// 

client.func = func;

fs.readdir(`./events/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(`.`)[0];
        console.log(`Attempting to load event ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

//client.commands = new Enmap();

/*fs.readdir(`./commands/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(`.js`)) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(`.`)[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, props);
    });
});*/

client.commands = new Discord.Collection();
fs.readdir(`./commands/`, (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(`.`).pop()  === `js`);
    if (jsfiles.length <= 0) {
        console.log(`No loadable commands!`);
        return;
    }
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        let commandName = f.split(`.`)[0];
        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(props.help.name, props);
    });
});

const responseObject = {
    'Rule 1': `Advertising of any form (without approval from an Admin) is prohibited.`,
    'Rule 2': `Keep things SFW unless the channel is marked as NSFW. NSFW content outside of designated channels will not be tolerated and you will be muted.`,
    'Rule 3': `All kinds of spamming is prohibited. Repeated pings, message bombs, text spams, etc.`,
    'Rule 4': `Keep your drama outside of this server, we don't want it here.`,
    'Rule 5': `Harassment of any kind is strictly prohibited and will not be tolerated under and circumstances.`,
    'Rule 6': `Treat all Admins and Moderators with the utmost respect.`,
    'Rule 7': `Name hoisting is not allowed, if you have an \`!\` or other character at the front of your name to bring yourself to the top of the list, you will be renamed without notice.`,
    'my milk': `IS HARD!`
};

client.on(`message`, (message) => {
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
client.on(`message`, message => {
    const prefixMention = new RegExp(`<@!?${client.user.id}>`);
    //    const guildConf = client.settings.ensure(message.guild.id, client.defaultSettings);
    if(prefixMention.test(message.content) === true) {
        if(message.content.includes(`prefix`) === true) {
            message.reply(`my prefix is \`` + process.env.PREFIX + `\` now stop tagging me.`);
        }
    }
    // Ignore all bots
    if (message.author.bot || !message.guild) return;
    // Ignore messages not starting with the prefix (in config.json)
    if(!message.content.toLowerCase().startsWith(`data`)) return;
    // Our standard argument/command name definition.
    const args = message.content.slice(5).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
    // Run the command
    cmd.run(client, message, args);
});

//Discord Login 
client.login(process.env.TOKEN);