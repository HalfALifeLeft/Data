/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
	client.func.createChannel(message, `testing`);
	console.log(`created channel 1`);
	message.channel.send(`created channel 1`);
	client.func.createCategory(message, `testingcategory`);
	console.log(`created the category`);
	message.channel.send(`created Category: testingcategory`);
	const ChannelLogging = client.channels.find(channel => channel.name === `testing` && channel.type == `text`);
	const category = client.channels.find(channel => channel.name === `testingcategory` && channel.type == `category`);
	if (category && ChannelLogging) ChannelLogging.setParent(category.id);
};

//create logging channels