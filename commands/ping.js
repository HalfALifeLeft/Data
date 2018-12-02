exports.run = (client, message, args, tools) => {
    console.log(tools);
    message.reply("Ready captain! " + Math.round(client.ping) + "ms").catch(console.error);
}