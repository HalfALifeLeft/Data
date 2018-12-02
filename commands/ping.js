exports.run = (client, message, args, func) => {
    message.reply("Ready captain! " + Math.round(client.ping) + "ms").catch(console.error);
}