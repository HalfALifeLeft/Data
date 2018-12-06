
exports.run = (client, message) => {
if(message.author.id !== client.ownerID) return;
  client.on("message", message => {
    const args = message.content.split(" ").slice(1);
 
    if (message.content.startsWith(client.prefix + "eval")) {
      if(message.author.id !== config.ownerID) return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
        
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  });
};
/*
     const { Client, RichEmbed } = require('discord.js');
     //const config = require("C:/DiscordBot/config.json"); <- old version
  const config = require("../../config.json");

      function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
      if (message.content.startsWith(config.prefix + "eval")) {
      let arrayOfID = ["444384280152637441", "341888659907149825"];
      if (!arrayOfID.includes(message.author.id)) return;//only ids above can use this
      try {
        let evaled = message.content.slice(1 + 4).trim(); 
// you do .toLowerCase() on args when defining them, so you can't use them in your eval. I made it so it removes the prefix and four letters from the start of the word and then evals everything else
        let evaledCode = eval(evaled);//eval the code
        message.delete();
        const embed = new RichEmbed()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor(DataHexcode)
        .addField("Input 📥 ", `\`\`\`${evaled}\`\`\``)
        .addField("Output 📤 ", `\`\`\`${evaledCode}\`\`\``)
          message.channel.send(embed)
      } catch (err) {//in case of error...another embed ...heh
        message.delete();
        let evaled = message.content.slice(1 + 4).trim();
        const embed = new RichEmbed()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor(DataHexcode)
        .addField("Evaled Command 📥 ", `\`\`\`${evaled}\`\`\``)
        .addField("Error ❌ ", `\`\`\`${err}\`\`\``)
          message.channel.send(embed)
      }}};
*/