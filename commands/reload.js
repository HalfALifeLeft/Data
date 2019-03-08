/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    //Check if the bot owner is the author
    if (client.id !== client.ownerID) return message.channel.send(`**You lack the required permissions to use this command.**`);
    //if owner isnt the one sending the message it replies with no perms

    //Delete from cache
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        //since we are already in the commands folder, no need to specify which folder
    } catch (e) {
        //if we encounter an error, return and respond in chat
        return message.channel.send(`Unable to reload ${args[0]}`);
    }

    //Finally, send an output if it hasn't returned yet
    message.reply(`The command ${args[0]} has been reloaded.`);

};
module.exports.help = {
    name: `reload`
};