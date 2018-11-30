module.exports = { //since this is being called like a module, the inside file needs to look like a module

    ping: function(channel) { //this is how a function would look like, name on the left followed by function() with optional arguments.
        message.reply("Ready captain! " + Math.round(client.ping) + "ms").catch(console.error);
    }

}