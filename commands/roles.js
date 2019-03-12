/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    let allRoles = [];

    message.guild.roles.forEach( function(role) {
        allRoles.push(role.name + ` - ` + role.id);
    });
    message.channel.send(`\`\`\`` + allRoles.join(`\n`).toString() + `\`\`\``);

};
module.exports.help = {
    name: `roles`
};