/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports.run = async (client, message, args) => {

    client.roles.ensure(`${message.guild.id}`, {
        role1: ``,
        role1Name: ``,
        role2: ``,
        role2Name: ``,
        role3: ``,
        role3Name: ``,
        role4: ``,
        role4Name: ``,
        role5: ``,
        role5Name: ``,
        role6: ``,
        role6Name: ``,
        role7: ``,
        role7Name: ``,
        role8: ``,
        role8Name: ``,
        role9: ``,
        role9Name: ``,
        role10: ``,
        role10Name: ``,
        role11: ``,
        role11Name: ``,
        role12: ``,
        role12Name: ``,
        role13: ``,
        role13Name: ``,
        role14: ``,
        role14Name: ``,
        role15: ``,
        role15Name: ``,
        role16: ``,
        role16Name: ``,
        role17: ``,
        role17Name: ``,
        role18: ``,
        role18Name: ``,
        role19: ``,
        role19Name: ``,
        role20: ``,
        role20Name: ``
    });
    let roleSetName = args[1];
    let roleSetArgs = args.slice(2).join(` `).toLowerCase();

    if (args[0] == `config`) {
        let i = 0;
        let o = 1;
        let allRoles = [];

        for (var b = 1; b <= 20; b++) {
            console.log(`role + ${b}`);
            let role = client.roles.get(`${message.guild.id}`, `role${b}`);
            let roleName = client.roles.get(`${message.guild.id}`, `role${b}Name`);
            if (role == ``) {
                role = `None`;
            }
            allRoles.push(`role` + b + ` => ` + role);
            if (roleName == ``) {
                roleName = `None`;
            }
            allRoles.push(`role` + b + `Name` + ` => ` + roleName);
        }

        console.log(allRoles);
        let tenRoles = client.roles.array().slice(i * 10, o * 10);

        let arrayOfRoles = [
            `role1`,
            `role1Name`,
            `role2`,
            `role2Name`,
            `role3`,
            `role3Name`,
            `role4`,
            `role4Name`,
            `role5`,
            `role5Name`,
            `role6`,
            `role6Name`,
            `role7`,
            `role7Name`,
            `role8`,
            `role8Name`,
            `role9`,
            `role9Name`,
            `role10`,
            `role10Name`,
            `role11`,
            `role11Name`,
            `role12`,
            `role12Name`,
            `role13`,
            `role13Name`,
            `role14`,
            `role14Name`,
            `role15`,
            `role15Name`,
            `role16`,
            `role16Name`,
            `role17`,
            `role17Name`,
            `role18`,
            `role18Name`,
            `role19`,
            `role19Name`,
            `role20`,
            `role20Name`
        ];

        if (!roleSetArgs && !roleSetName) {
            return message.channel.send(`\`\`\`**Page (${o}/${Math.ceil(allRoles.length / 20)})**\n        role1 => ${client.roles.get(`${message.guild.id}`, `role1`)}\n        role1Name => ${client.roles.get(`${message.guild.id}`, `role1Name`)}\n        role2 => ${client.roles.get(`${message.guild.id}`, `role2`)}\n        role2Name => ${client.roles.get(`${message.guild.id}`, `role2Name`)}\n        role3 => ${client.roles.get(`${message.guild.id}`, `role3`)}\n        role3Name => ${client.roles.get(`${message.guild.id}`, `role3Name`)}\n        role4 => ${client.roles.get(`${message.guild.id}`, `role4`)}\n        role4Name => ${client.roles.get(`${message.guild.id}`, `role4Name`)}\n        role5 => ${client.roles.get(`${message.guild.id}`, `role5`)}\n        role5Name => ${client.roles.get(`${message.guild.id}`, `role5Name`)}\n        role6 => ${client.roles.get(`${message.guild.id}`, `role6`)}\n        role6Name => ${client.roles.get(`${message.guild.id}`, `role6Name`)}\n        role7 => ${client.roles.get(`${message.guild.id}`, `role7`)}\n        role7Name => ${client.roles.get(`${message.guild.id}`, `role7Name`)}\n        role8 => ${client.roles.get(`${message.guild.id}`, `role8`)}\n        role8Name => ${client.roles.get(`${message.guild.id}`, `role8Name`)}\n        role9 => ${client.roles.get(`${message.guild.id}`, `role9`)}\n        role9Name => ${client.roles.get(`${message.guild.id}`, `role9Name`)}\n        role10 => ${client.roles.get(`${message.guild.id}`, `role10`)}\n        role10Name => ${client.roles.get(`${message.guild.id}`, `role10Name`)}\`\`\``)
                .then((msg) => {
                    msg.react(`⬅`)
                        .then(() => {
                            setTimeout(function () {
                                msg.react(`➡`)
                                    .catch((e) => {
                                        console.error(e);
                                    });
                            }, 250);

                            const collector = msg.createReactionCollector((reaction, user) =>
                                user.id === message.author.id && //NEEDS TO VERIFY MESSAGE AUTHOR TWICE, ITS LIKE (A & B) or (C & D) NOT A & (B OR C).
                                reaction.emoji.name === `⬅` ||
                                user.id === message.author.id &&
                                reaction.emoji.name === `➡`, {
                                    time: 300000
                                }
                            );

                            collector.on(`collect`, reaction => {
                                const react = reaction.emoji.name;

                                if (react === `➡`) {
                                    i++;
                                    o++;
                                    if (i >= Math.ceil(allRoles.length / 20)) {
                                        i = 0;
                                    }
                                    if (o >= Math.ceil(allRoles.length / 20) + 1) {
                                        o = 1;
                                    }
                                    tenRoles = allRoles.slice(i * 20, o * 20);
                                    msg.edit(`\`\`\`**Page (${o}/${Math.ceil(allRoles.length / 20)})**\n` + `        `  + tenRoles.join(`\n        `).toString() + `\`\`\``);
                                    setTimeout(function () {
                                        reaction.remove(message.author.id);
                                    }, 250);
                                } else if (react === `⬅`) {
                                    i--;
                                    o--;
                                    if (i < 0) {
                                        i = Math.ceil(allRoles.length / 20) - 1;
                                    }
                                    if (o < 1) {
                                        o = Math.ceil(allRoles.length / 20);
                                    }
                                    tenRoles = allRoles.slice(i * 20, o * 20);
                                    msg.edit(`\`\`\`**Page (${o}/${Math.ceil(allRoles.length / 20)})**\n` + `        ` + tenRoles.join(`\n        `).toString() + `\`\`\``);
                                    setTimeout(function () {
                                        reaction.remove(message.author.id);
                                    }, 250);
                                }

                                setTimeout(function () {
                                    collector.stop();
                                }, 300000);

                            });

                            return;
                        })
                        .catch((e) => {
                            console.error(e);
                        });
                });
        }

        if (arrayOfRoles.includes(roleSetName)) {

            if (roleSetArgs) {

                if (arrayOfRoles.includes(roleSetName) && roleSetArgs) {

                    client.roles.set(`${message.guild.id}`, `${roleSetArgs}`, `${roleSetName}`);
                    return message.channel.send(`\`\`\`${roleSetName} => ${roleSetArgs}\`\`\``);

                }

                return;

            } else {

                return message.reply(`Please give me a config arg!`);

            }

        } else {

            return message.reply(`Please give me a config name!`);

        }

    } else {

        let userRole = args.slice(0).join(` `).toLowerCase();

        var obj = {};
        obj[`${client.roles.get(`${message.guild.id}`, `role1Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role1`)); //1
        obj[`${client.roles.get(`${message.guild.id}`, `role2Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role2`)); //2
        obj[`${client.roles.get(`${message.guild.id}`, `role3Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role3`)); //3
        obj[`${client.roles.get(`${message.guild.id}`, `role4Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role4`)); //4
        obj[`${client.roles.get(`${message.guild.id}`, `role5Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role5`)); //5
        obj[`${client.roles.get(`${message.guild.id}`, `role6Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role6`)); //6
        obj[`${client.roles.get(`${message.guild.id}`, `role7Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role7`)); //7
        obj[`${client.roles.get(`${message.guild.id}`, `role8Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role8`)); //8
        obj[`${client.roles.get(`${message.guild.id}`, `role9Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role9`)); //9
        obj[`${client.roles.get(`${message.guild.id}`, `role10Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role10`)); //10
        obj[`${client.roles.get(`${message.guild.id}`, `role11Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role11`)); //11
        obj[`${client.roles.get(`${message.guild.id}`, `role12Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role12`)); //12
        obj[`${client.roles.get(`${message.guild.id}`, `role13Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role13`)); //13
        obj[`${client.roles.get(`${message.guild.id}`, `role14Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role14`)); //14
        obj[`${client.roles.get(`${message.guild.id}`, `role15Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role15`)); //15
        obj[`${client.roles.get(`${message.guild.id}`, `role16Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role16`)); //16
        obj[`${client.roles.get(`${message.guild.id}`, `role17Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role17`)); //17
        obj[`${client.roles.get(`${message.guild.id}`, `role18Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role18`)); //18
        obj[`${client.roles.get(`${message.guild.id}`, `role19Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role19`)); //19
        obj[`${client.roles.get(`${message.guild.id}`, `role20Name`)}`] = message.guild.roles.find(r => r.id === client.roles.get(`${message.guild.id}`, `role20`)); //20

        //if no userRole, send all roles
        if (!userRole) {
            //message.delete();
            if (message.author.id == process.env.OWNERID) {
                let allRoles = Object.values(obj).join(`, `);

                const {
                    Client,
                    RichEmbed
                } = require(`discord.js`);
                const embed = new RichEmbed()
                    .setTitle(`Color Roles`)
                    .setDescription(allRoles)
                    .setFooter(`Syntax: d!role [role name]`)
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
    }
};
module.exports.help = {
    name: `role`
};