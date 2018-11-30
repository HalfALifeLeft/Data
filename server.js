//Calling Packages
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

//Calling json here
const commands = JSON.parse(fs.readFileSync('Storage/commands.json', 'utf8'));
const config = require("./config.json");

//Global Functions
const tools = require('./functions.js');

//Bot Settings
const OwnerID = '444384280152637441';
const prefix = 'd!';

//Listener Events
client.on('message', message => {
      //This is run whenever a new message is created in a channel the bot has access to

      //Variables
      let args = message.content.slice(prefix.length).trim().split(' ');
      let cmd = args.shift().toLowerCase();
      let sender = message.author;
      let msg = message.content.toLowerCase();
      
      //Return Statements
      if (message.author.bot) return; //this will ignore all bots
      if (!message.content.toLowerCase().startsWith(prefix)) return; //this will return if the message doesn't start with prefix

      //Command Handler
      try {

        // Reload Command (move to separate file eventually)
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];
        
        //Options
        let ops = {
          ownerID: OwnerID //ops.ownerID to return the ID defined at the top of server.js
        }

          let commandFile = require(`./commands/${cmd}.js`); //this will require a file in the commands folder
          commandFile.run(client, message, args, ops, tools); //this will pass these variables into the file

      } catch(e) { //this will catch any errors, either in code or if command doesn't exist
          console.log(e.stack);
      }

});

//Ready Event -- This will run whenever the bot turns on
client.on('ready', () => console.log('Launched!'));

//Discord Login 
client.login(config.token)



/*
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const { Client, RichEmbed } = require('discord.js');
const config = require("./config.json"); 

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

// client.on('',''=>{});


client.on('guildDelete',guild=>{
  console.log(`I have left ${guild.name} at ${new Date()}`)
});

client.on('guildCreate', guild => {
  const channel = guild.channels.find(ch => ch.name === 'general');
  if (!channel) return;
  client.channels.get("general")
  channel.send(`I have joined ${guild.name}`);
  console.log(`I have joined ${guild.name} at ${new Date()}`)
});

client.on("message", (message) => {
  //message.content.toLowerCase();
  if (message.content.toLowerCase().startsWith("my milk")) {
    message.channel.send("IS HARD!");
  }

//  if (message.content.toLowerCase().includes("data", "prefix")) {
//    message.channel.send("My prefix is `d!`");
//  }
//  if (message.content.toLowerCase().startsWith("maxy")) {
//    message.channel.send("Is the best.");
//  }
  if (message.content.toLowerCase().includes("twitch prime")) {
    message.channel.send("Did you know that you can link your Amazon Prime account to Twitch and subscribe to me FOR FREE? Learn more here: https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide");
  }
//  if (message.isMentioned(client.user) && message.content.includes("prefix")) {
//    message.channel.send("My prefix is `d!`, now stop tagging me.");
//  }

});  
  

    client.on("message", async message => {
    var UserID = client.user.id;
    const prefixMention = new RegExp(/<@!?${UserID}> /);
   //   const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : 'd!';
    if(message.content === prefixMention + "prefix") {
      message.reply("My prefix is `d!`, now stop tagging me.")
    }
  
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

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
  
  
});
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.login(config.token);
*/