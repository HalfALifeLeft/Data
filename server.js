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

client.on('guildCreate', guild => {
  const channel = guild.channels.find(ch => ch.name === 'general');
  if (!channel) return;
  client.channels.get("general")
  channel.send(`I have joined ${guild.name}`);
  console.log(`I have joined ${guild.name} at ${new Date()}`)
});

client.on('guildDelete',guild=>{
  console.log(`I have left ${guild.name} at ${new Date()}`)
});

//listener event: User joining the discord server.
client.on('guildMemberAdd', member => {
  console.log('User ' + member.user.username + 'has joined the server!') //sends a message in console that someone joined
  var role = member.guild.roles.find('name', 'Members')
  member.addRole(role)
});

//client.on("messageDelete", (messageDelete) => {
//  messageDelete.channel.send(`The message: "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)
//});

//Discord Login 
client.login(process.env.TOKEN);