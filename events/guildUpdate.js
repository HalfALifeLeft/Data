/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = (client, oldGuild, newGuild) => {
  
        client.dataConfig.ensure(`${oldGuild.id}`, {
        prefix: `d!`, 
        mutedRole: ``,
        messageLogs: ``,
        memberLogs: ``,
        serverLogs: ``,
        modLogs: ``,
        welcomeChannel: ``,
        ruleOne: ``,
        ruleTwo: ``,
        ruleThree: ``,
        ruleFour: ``,
        ruleFive: ``,
        ruleSix: ``,
        ruleSeven: ``,
        ruleEight: ``,
        ruleNine: ``,
        ruleTen: ``});

  
    const channelId = client.dataConfig.get(`${oldGuild.id}`, `serverLogs`);
    if (newGuild.channels.has(channelId) == false) return;

    const mychannel = newGuild.channels.find(channel => channel.id === channelId);
    if (!mychannel) return;
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);


    if(oldGuild.name != newGuild.name) {
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old Server Name`, `${oldGuild.name}`, true)
            .addField(`New Server Name`, `${newGuild.name}`, true);
        return mychannel.send(embed);
    }

    if(oldGuild.icon != newGuild.icon) {
        if (newGuild.icon == null) {
            const embed = new RichEmbed()
                .setTimestamp()
                .setColor(process.env.GOOD)
                .addField(`Old Server Icon`, `${oldGuild.iconURL}`)
                .addField(`New Server Icon`, `**No Icon**`);
            return mychannel.send(embed);
        }
        if (oldGuild.icon == null) {
            const embed = new RichEmbed()
                .setTimestamp()
                .setColor(process.env.GOOD)
                .addField(`Old Server Icon`, `**No Icon**`)
                .addField(`New Server Icon`, `${newGuild.iconURL}`);
            return mychannel.send(embed);
        }
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old Server Icon`, `${oldGuild.iconURL}`)
            .addField(`New Server Icon`, `${newGuild.iconURL}`);
        return mychannel.send(embed);
    }

    if(oldGuild.region != newGuild.region) {
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old Server Region`, `**${oldGuild.region}**`)
            .addField(`New Server Region`, `**${newGuild.region}**`);
        return mychannel.send(embed);
    }

    if(oldGuild.afkTimeout != newGuild.afkTimeout) {
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old AFK Timeout`, `**${parseInt(oldGuild.afkTimeout / 60)} minutes**`)
            .addField(`New AFK Timeout`, `**${parseInt(newGuild.afkTimeout / 60)} minutes**`);
        return mychannel.send(embed);
    }

    if(oldGuild.afkChannelID != newGuild.afkChannelID) {
        if(oldGuild.afkChannelID == null) {
            const embed = new RichEmbed()
                .setTimestamp()
                .setColor(process.env.GOOD)
                .addField(`Old AFK Channel`, `**No AFK Channel**`)
                .addField(`New AFK Channel`, `${newGuild.afkChannel.name} (${oldGuild.afkChannelID})`);
            return mychannel.send(embed);
        }
        if(newGuild.afkChannelID == null) {
            const embed = new RichEmbed()
                .setTimestamp()
                .setColor(process.env.GOOD)
                .addField(`Old Server Icon`, `${oldGuild.afkChannel.name} (${oldGuild.afkChannelID})`)
                .addField(`New Server Icon`, `No AFK Channel`);
            return mychannel.send(embed);
        }
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old AFK Channel`, `${oldGuild.afkChannel.name} (${oldGuild.afkChannelID})`)
            .addField(`New AFK Channel`, `${newGuild.afkChannel.name} (${oldGuild.afkChannelID})`);
        return mychannel.send(embed);
    }

    if(oldGuild.verificationLevel != newGuild.verificationLevel) {
        let verificationLevelNameOld = ``;
        let verificationLevelNameNew = ``;
        if(oldGuild.verificationLevel == 0) {
            verificationLevelNameOld = `None`;
        }
        if(oldGuild.verificationLevel == 1) {
            verificationLevelNameOld = `Low`;
        }
        if(oldGuild.verificationLevel == 2) {
            verificationLevelNameOld = `Medium`;
        }
        if(oldGuild.verificationLevel == 3) {
            verificationLevelNameOld = `(╯°□°）╯︵ ┻━┻`;
        }
        if(oldGuild.verificationLevel == 4) {
            verificationLevelNameOld = `┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻`;
        }
        if(newGuild.verificationLevel == 0) {
            verificationLevelNameNew = `None`;
        }
        if(newGuild.verificationLevel == 1) {
            verificationLevelNameNew = `Low`;
        }
        if(newGuild.verificationLevel == 2) {
            verificationLevelNameNew = `Medium`;
        }
        if(newGuild.verificationLevel == 3) {
            verificationLevelNameNew = `(╯°□°）╯︵ ┻━┻`;
        }
        if(newGuild.verificationLevel == 4) {
            verificationLevelNameNew = `┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻`;
        }
        
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old Verification Level`, `${verificationLevelNameOld}`)
            .addField(`New Verification Level`, `${verificationLevelNameNew}`);
        return mychannel.send(embed);
    }

    if(oldGuild.explicitContentFilter != newGuild.explicitContentFilter) {
        let explicitContentFilterOld = ``;
        let explicitContentFilterNew = ``;
        if(oldGuild.explicitContentFilterOld == 0) {
            explicitContentFilterOld = `Don't scan any messages.`;
        }
        if(oldGuild.explicitContentFilterOld == 1) {
            explicitContentFilterOld = `Scan messages from members without a role.`;
        }
        if(oldGuild.explicitContentFilterOld == 2) {
            explicitContentFilterOld = `Scan messages sent by all members.`;
        }
        if(oldGuild.explicitContentFilterNew == 0) {
            explicitContentFilterNew = `Don't scan any messages.`;
        }
        if(oldGuild.explicitContentFilterNew == 1) {
            explicitContentFilterNew = `Scan messages from members without a role.`;
        }
        if(oldGuild.explicitContentFilterNew == 2) {
            explicitContentFilterNew = `Scan messages sent by all members.`;
        }

        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old Explicit Content Filter`, `${explicitContentFilterOld}`)
            .addField(`New Explicit Content Filter`, `${explicitContentFilterNew}`);
        return mychannel.send(embed);
    }

    if(oldGuild.mfaLevel != newGuild.mfaLevel) {
        let mfaLevelOld = ``;
        let mfaLevelNew = ``;
        if(oldGuild.mfaLevel == 0) {
            mfaLevelOld = `2FA Not Required`;
        }
        if(oldGuild.mfaLevel == 1) {
            mfaLevelOld = `2FA Required`;
        }
        if(newGuild.mfaLevel == 0) {
            mfaLevelNew = `2FA Not Required`;
        }
        if(newGuild.mfaLevel == 1) {
            mfaLevelNew = `2FA Required`;
        }
        
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old 2FA Requirement`, `${mfaLevelOld}`)
            .addField(`New 2FA Requirement`, `${mfaLevelNew}`);
        return mychannel.send(embed);
    }

    if(oldGuild.defaultMessageNotifications != newGuild.defaultMessageNotifications) {
        let defaultNotificationsOld = ``;
        let defaultNotificationsNew = ``;
        if(oldGuild.defaultMessageNotifications == `ALL`) {
            defaultNotificationsOld = `All Messages`;
        }
        if(oldGuild.defaultMessageNotifications == `MENTIONS`) {
            defaultNotificationsOld = `Only @mentions`;
        }
        if(newGuild.defaultMessageNotifications == `ALL`) {
            defaultNotificationsNew = `All Messages`;
        }
        if(newGuild.defaultMessageNotifications == `MENTIONS`) {
            defaultNotificationsNew = `Only @mentions`;
        }
        
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old Default Notification Settings`, `${defaultNotificationsOld}`)
            .addField(`New Default Notification Settings`, `${defaultNotificationsNew}`);
        return mychannel.send(embed);
    }

    if(oldGuild.ownerID != newGuild.ownerID) {
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old Server Owner`, `<@${oldGuild.ownerID}>`)
            .addField(`New Server Owner`, `<@${newGuild.ownerID}>`);
        return mychannel.send(embed);
    }

    if(oldGuild.systemChannel != newGuild.systemChannel) {
        const embed = new RichEmbed()
            .setTimestamp()
            .setColor(process.env.GOOD)
            .addField(`Old System Channel`, `<#${oldGuild.systemChannel.id}>`)
            .addField(`New System Channel`, `<#${newGuild.systemChannel.id}>`);
        return mychannel.send(embed);
    }
};