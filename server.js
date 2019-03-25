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

const client = new Discord.Client({
    disableEveryone: true,
});
const commands = JSON.parse(fs.readFileSync(`Storage/commands.json`, `utf8`));
const config = require(`./config.json`);
const Message = new Discord.Message();
var stringSimilarity = require(`string-similarity`);
const Guild = new Discord.Guild();

client.config = config;
client.message = Message;
client.stringSimilarity = stringSimilarity;
client.fs = fs;
client.guild = Guild;
client.enmap = Enmap;
// 
// To access this do client.func.[FUNCTIONHERE]
// 

const penisEnmap = new Enmap({
    name: `penis`,
    autoFetch: true,
    fetchAll: false
});

client.penisEnmap = penisEnmap;

penisEnmap.defer.then(() => {
    console.log(penisEnmap.size + ` penis keys loaded`);
});

const dataConfig = new Enmap({
    name: `dataConfig`,
    autoFetch: true,
    fetchAll: false
});

client.dataConfig = dataConfig;

dataConfig.defer.then(() => {
    console.log(dataConfig.size + ` config keys loaded`);
});

const currency = new Enmap({
    name: `currency`,
    autoFetch: true,
    fetchAll: false
});

client.currency = currency;

currency.defer.then(() => {
    console.log(currency.size + ` currency keys loaded`);
});

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

client.commands = new Discord.Collection();
fs.readdir(`./commands/`, (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(`.`).pop() === `js`);
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

client.on(`message`, message => {
    const prefixMention = new RegExp(`<@!?${client.user.id}>`);
    client.dataConfig.ensure(`${message.guild.id}`, {
        prefix: `d!`, 
        mutedRole: ``,
        messageLogs: ``,
        memberLogs: ``,
        serverLogs: ``,
        modLogs: ``,
        welcomeChannel: ``,
        ruleOne: ``,
        ruleTwo: ``,
        ruleThree: ``,
        ruleFour: ``,
        ruleFive: ``,
        ruleSix: ``,
        ruleSeven: ``,
        ruleEight: ``,
        ruleNine: ``,
        ruleTen: ``});

    const responseObject = {
        'Rule 1': client.dataConfig.get(`${message.guild.id}`, `ruleOne`),
        'Rule 2': client.dataConfig.get(`${message.guild.id}`, `ruleTwo`),
        'Rule 3': client.dataConfig.get(`${message.guild.id}`, `ruleThree`),
        'Rule 4': client.dataConfig.get(`${message.guild.id}`, `ruleFour`),
        'Rule 5': client.dataConfig.get(`${message.guild.id}`, `ruleFive`),
        'Rule 6': client.dataConfig.get(`${message.guild.id}`, `ruleSix`),
        'Rule 7': client.dataConfig.get(`${message.guild.id}`, `ruleSeven`),
        'Rule 8': client.dataConfig.get(`${message.guild.id}`, `ruleEight`),
        'Rule 9': client.dataConfig.get(`${message.guild.id}`, `ruleNine`),
        'Rule 10': client.dataConfig.get(`${message.guild.id}`, `ruleTen`)
    };

    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]);
    }

    const dataPrefix = client.dataConfig.get(`${message.guild.id}`, `prefix`);
    if (prefixMention.test(message.content) === true) {
        if (message.content.includes(`prefix`) === true) {
            if (message.content.toLowerCase().indexOf(`<@`) !== 0) return;
            message.reply(`my prefix is \`` + dataPrefix + `\` now stop tagging me.`);
        }
    
        let prefixLength = 3;
        if(message.mentions.members.first().user.nickname !== null) {
            prefixLength = 4;
        }
        
        // Ignore all bots
        if (message.author.bot || !message.guild) return;
        // Ignore messages not starting with the prefix (in config.json)
        if (message.content.toLowerCase().indexOf(`<@`) !== 0) return;
        // Our standard argument/command name definition.
        const args = message.content.slice(message.mentions.members.first().id.length + prefixLength).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        // Grab the command data from the client.commands Enmap
        const cmd = client.commands.get(command);
        // If that command doesn't exist, silently exit and do nothing
        if (!cmd) return;
        // Run the command
        cmd.run(client, message, args);
    }
});

//Discord Login 
client.login(process.env.TOKEN);