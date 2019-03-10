/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports.run = async (client, message, args) => {

    let userRole = args.slice(0).join(` `);

    var obj = {};
    obj[ `Neon Red` ] = message.guild.roles.find(r => r.name === `Neon Red`);//1
    obj[ `Neon Orange` ] = message.guild.roles.find(r => r.name === `Neon Orange`);//2
    obj[ `Neon Yellow` ] = message.guild.roles.find(r => r.name === `Neon Yellow`);//3
    obj[ `Neon Green` ] = message.guild.roles.find(r => r.name === `Neon Green`);//4
    obj[ `Neon Sea Green` ] = message.guild.roles.find(r => r.name === `Neon Sea Green`);//5
    obj[ `Neon Light Blue` ] = message.guild.roles.find(r => r.name === `Neon Light Blue`);//6
    obj[ `Neon Blue` ] = message.guild.roles.find(r => r.name === `Neon Blue`);//7
    obj[ `Neon Blurple` ] = message.guild.roles.find(r => r.name === `Neon Blurple`);//8
    obj[ `Neon Purple` ] = message.guild.roles.find(r => r.name === `Neon Purple`);//9
    obj[ `Neon Pink` ] = message.guild.roles.find(r => r.name === `Neon Pink`);//10
    obj[ `Red` ] = message.guild.roles.find(r => r.name === `Red`);//11
    obj[ `Orange` ] = message.guild.roles.find(r => r.name === `Orange`);//12
    obj[ `Yellow` ] = message.guild.roles.find(r => r.name === `Yellow`);//13
    obj[ `Green` ] = message.guild.roles.find(r => r.name === `Green`);//14
    obj[ `Light Blue` ] = message.guild.roles.find(r => r.name === `Light Blue`);//15
    obj[ `Blue` ] = message.guild.roles.find(r => r.name === `Blue`);//16
    obj[ `Blurple` ] = message.guild.roles.find(r => r.name === `Blurple`);//17
    obj[ `Purple` ] = message.guild.roles.find(r => r.name === `Purple`);//18

    //if no userRole, send all roles
    if (!userRole) {
        message.delete();
        if (message.author.id == process.env.OWNERID) {
            let allRoles = Object.values(obj).join(`, `);

            const {
                Client,
                RichEmbed
            } = require(`discord.js`);
            const embed = new RichEmbed()
                .setTitle(`Color Roles`)
                .setDescription(allRoles)
                .setFooter(`Syntax: dd!role [role name]`)
                .setColor(process.env.HEXCODE);
        
            return message.channel.send(embed);
        }
        return;
    }

    //if obj[userRole] == undefined -> respond saying that it isn't a role
    if (obj[userRole] == undefined) {
        message.delete();
        return message.reply(`that is not a role!`).then((msg) => {
            msg.delete(5000);
        });
    }

    //if obj[userRole] != undefined -> add role to message.author with r.id obj[userRole]
    var role = message.guild.roles.find(r => r.id === obj[userRole].id);
    message.member.addRole(role, `User used role command to obtain role.`);
    message.delete();
};
module.exports.help = {
    name: `role`
};