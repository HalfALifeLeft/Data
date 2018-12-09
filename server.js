require('dotenv').config()
//process.env.[THING TO CALL]

//Calling Packages
const Discord = require('discord.js');
const Enmap = require("enmap");
const fs = require('fs');
var func = require("./functions.js");

const client = new Discord.Client();
const commands = JSON.parse(fs.readFileSync('Storage/commands.json', 'utf8'));
const config = require("./config.json");

client.config = config;

// 
// To access this do client.functions.[FUNCTIONHERE]
// 

client.functions = func;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
})

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

  client.on("message", (message) => {
    //message.content.toLowerCase();
    if (message.content.toLowerCase().startsWith("my milk")) {
      message.channel.send("IS HARD!");
    } 
}); 

client.on('message', message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : 'd!';
    if(message.content === prefixMention + prefix) {
      message.reply("my prefix is `d!`, now stop tagging me.")
  }
});

// client.on('',''=>{});

//Discord Login 
client.login(process.env.TOKEN);