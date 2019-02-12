module.exports.run = async (client, message, args) => {
    let usedReport = new Set();

    if(usedReport.has(message.author.id)) {
        message.channel.send(`5 minute cooldown`);
        return;
    } else {
        var interval = setTimeout(function () {
            message.channel.send(`specify the player name`).then((messagex) => {

                message.channel.awaitMessages(response => response.author.id === message.author.id, {
                    max: 1,
                    time: 60000,
                    error: [`time`]
                }).then((collecterResponse1) => {
                    
                })
                
            })
        });
    }
};
module.exports.help = {
    name: `rem`
};