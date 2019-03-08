/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    let content = args.slice(1).join(` `);
    let imageArray = [
        `https://media1.tenor.com/images/4a211d5c5d076ad8795d8a82f9f01c29/tenor.gif?itemid=13221038`,
        `https://media1.tenor.com/images/43ecfeae5fe3db46c69839c94fd156bb/tenor.gif?itemid=12669036`,
        `https://media1.tenor.com/images/d16a9affe8915e6413b0c1f1d380b2ee/tenor.gif?itemid=12669052`,
        `https://media1.tenor.com/images/6e1f8079fe446e8bc245c25d7dae91a7/tenor.gif?itemid=12806537`,
        `https://media1.tenor.com/images/08de7ad3dcac4e10d27b2c203841a99f/tenor.gif?itemid=4885268`,
        `https://media1.tenor.com/images/d0c2e7382742f1faf8fcb44db268615f/tenor.gif?itemid=5853736`,
        `https://media1.tenor.com/images/ec938c17b78033bf368cacea844d03af/tenor.gif?itemid=7250422`,
        `https://media1.tenor.com/images/8e76ba7908efee7489aa53f349bb5b0d/tenor.gif?itemid=12669027`,
        `https://media1.tenor.com/images/13be52a4a4a26b0c9e479df6644d6de5/tenor.gif?itemid=12668752`,
        `https://media1.tenor.com/images/3b205574d0352d4d61687f835276566d/tenor.gif?itemid=12669039`,
        `https://media1.tenor.com/images/b498f9fbbb0d7f1523c2ec1684994304/tenor.gif?itemid=12669026`,
        `https://media1.tenor.com/images/e000639b39298e8e5022f80adc8768b4/tenor.gif?itemid=12050689`,
        `https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750`,
        `https://media1.tenor.com/images/0569ee4ea490a197b0b38e92c3eede9e/tenor.gif?itemid=12669025`,
        `https://media1.tenor.com/images/634620b2c48babc04098364b9d3dfca5/tenor.gif?itemid=12668881`,
        `https://media1.tenor.com/images/6bb203ce60658d2dbe6b65d3a510f4dd/tenor.gif?itemid=12668759`,
        `https://media1.tenor.com/images/c1461ba849fd9cff5b346f2433f8e8c1/tenor.gif?itemid=12668868`,
        `https://media1.tenor.com/images/b43e90f82f1b7f85683a9c6610f0045e/tenor.gif?itemid=12668872`,
        `https://media1.tenor.com/images/21942e559915eae43d964c19d170e647/tenor.gif?itemid=12668755`,
        `https://media1.tenor.com/images/1b7ee6c0c206acaf09b2ab0e8703a681/tenor.gif?itemid=12668757`,
        `https://media1.tenor.com/images/68cc73bdd66f0467ceb3e49ce5967dbc/tenor.gif?itemid=12668756`,
        `https://media1.tenor.com/images/c71f6fd355355a51903651a312d425a8/tenor.gif?itemid=12668753`,
        `https://media1.tenor.com/images/4781b66b378c1566d812c699f2a09661/tenor.gif?itemid=12668751`,
        `https://media1.tenor.com/images/20ecc3af6a5523872854a7bc2c083b7e/tenor.gif?itemid=9032323`,
        `https://media1.tenor.com/images/3ca47b58018b7c097ab2dd2d382d43d8/tenor.gif?itemid=12373957`
    ];
    let randomNumber = Math.floor(Math.random() * imageArray.length);
    let usersMentioned = message.mentions.users.array();

    if (message.mentions.users.find(val => val.username === message.author.username)) {
        message.channel.send(`Awww, I'll cuddle you <3`);
        const {
            Client,
            RichEmbed
        } = require(`discord.js`);
        const embed = new RichEmbed()
            .setColor(process.env.HEXCODE)
            .setImage(imageArray[randomNumber]);
        message.channel.send({
            embed
        });
        return;
    }

    if (usersMentioned.length === 0) {
        message.channel.send(`You can't cuddle the air! Tag someone to cuddle them!`);
        return;
    }

    message.channel.send(`${message.author} cuddles ${message.mentions.users.array().toString().replace(`,`, `, `)} ${content}`);
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setImage(imageArray[randomNumber]);
    message.channel.send({
        embed
    });
};
module.exports.help = {
    name: `cuddle`
};