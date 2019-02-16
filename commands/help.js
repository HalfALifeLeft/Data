/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    const fs = require(`fs`);
    const prefix = process.env.PREFIX;
    const commands = JSON.parse(fs.readFileSync(`Storage/commands.json`, `utf8`));
    const Discord = require(`discord.js`);
    let commandFound = ``;
    let commandDesc = ``;
    let commandUsage = ``;
    let commandGroup = ``;
    let groupFound = ``;
    let usersArray = [];
    let modsArray = [];
    let adminsArray = [];

    for (var cmd in commands) {
        if (commands[cmd].group == `Users`) {
            usersArray.push(` ` + commands[cmd].name);
        }
        if (commands[cmd].group == `Mods`) {
            modsArray.push(` ` + commands[cmd].name);
        }
        if (commands[cmd].group == `Admins`) {
            adminsArray.push(` ` + commands[cmd].name);
        }
    }

    if (!args[0]) {
        const embed = new Discord.RichEmbed()
            .setTitle(`Commands List`)
            .setDescription(`Just a command list for Data's functionality. More help can be found with \`d!syntax [Users | Mods | Admins]\`!`)
            .setColor(process.env.HEXCODE)
            .addField(`User Commands`, `\`${usersArray.sort().toString()}\``)
            .addField(`Mod Commands`, `\`${modsArray.sort().toString()}\``)
            .addField(`Admin Commands`, `\`${adminsArray.sort().toString()}\``)
            .setFooter(`Created by ` + process.env.OWNERNAME, `https://i.imgur.com/NVWwp1d.png`)
            .setTimestamp();
        message.channel.send({
            embed
        });
        return;
    } else {
        const embedOne = new Discord.RichEmbed()
            .setTitle(`User Commands`)
            .setColor(process.env.HEXCODE)
            .setTimestamp();
        const embedTwo = new Discord.RichEmbed()
            .setTitle(`Mods Commands`)
            .setColor(process.env.HEXCODE)
            .setTimestamp();
        const embedThree = new Discord.RichEmbed()
            .setTitle(`Admins Commands`)
            .setColor(process.env.HEXCODE)
            .setTimestamp();
        const embedFour = new Discord.RichEmbed()
            .setTitle(`Bot Owner Commands`)
            .setColor(process.env.HEXCODE)
            .setTimestamp();
        if (args[0].toLowerCase() === `all`) {
            for (var cmd in commands) {
                if (commands[cmd].group == `Users`) {
                    embedOne.addField(`${commands[cmd].name}`, `${commands[cmd].desc}\nUsage: ${prefix + commands[cmd].usage}`);
                }
                if (commands[cmd].group == `Mods`) {
                    embedTwo.addField(`${commands[cmd].name}`, `${commands[cmd].desc}\nUsage: ${prefix + commands[cmd].usage}`);
                }
                if (commands[cmd].group == `Admins`) {
                    embedThree.addField(`${commands[cmd].name}`, `${commands[cmd].desc}\nUsage: ${prefix + commands[cmd].usage}`);
                }
            }
            message.author.send(embedOne);
            message.author.send(embedTwo);
            message.author.send(embedThree);
            return;
        }
        if (args[0].toLowerCase() === `owner`) {
            for (var cmd in commands) {
                if (commands[cmd].group == `Owner`) {
                    embedOne.addField(`${commands[cmd].name}`, `${commands[cmd].desc}\nUsage: ${prefix + commands[cmd].usage}`);
                }
            }
            message.author.send(embedFour);
            return;
        }
    }
    for (var cmd in commands) { //for every command
        if (args.join(` `).trim().toUpperCase() === commands[cmd].name.toUpperCase()) { //check if args[0] = a command in commands.json
            commandFound = commands[cmd].name;
            commandDesc = commands[cmd].desc;
            commandUsage = commands[cmd].usage;
            commandGroup = commands[cmd].group;
            break;
        }
    }
    if (commandFound) { //help page sent in channel for single found command from args[0]
        const embed = new Discord.RichEmbed()
            .setTitle(`${commandFound}`)
            .setDescription(`${commandDesc}\nUsage: ${prefix + commandUsage}`)
            .setColor(process.env.HEXCODE)
            .setFooter(`Group: ${commandGroup}`)
            .setTimestamp();
        message.channel.send({
            embed
        });
    } else {
        const embed = new Discord.RichEmbed()
            .setDescription(`No command found for \`${args[0]}\``)
            .setColor(process.env.HEXCODE);
        message.channel.send({
            embed
        });
    }
};
module.exports.help = {
    name: `help`
};