/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

exports.hexcode = 0xf2c300;

exports.ping = (client) => {
    return Math.round(client.ping);
};

exports.example = (a, b) => {
    if (a && b) {
        return a + b;
    }
    return undefined;
}; 
exports.createChannel = (message, name) => {
    setTimeout(()=> {
        message.guild.createChannel(name, `text`);
        message.channel.send(`created channel: ` + name);
    }, 50);
};
exports.createCategory = (message, name) => {
    setTimeout(() => {
        message.guild.createChannel(name, `category`);
        message.channel.send(`created Category: ` + name);
    }, 50);
};
/*
function hexcode() {
	return 0xf2c300;
}

function ping(client) {
	return Math.round(client.ping);
}
*/