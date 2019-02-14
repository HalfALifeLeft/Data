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
/*
function hexcode() {
	return 0xf2c300;
}

function ping(client) {
	return Math.round(client.ping);
}
*/