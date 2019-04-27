Data Bot
======
Data is an android from Star Trek: The Next Generation, but I absolutely loved the character so I made him into a bot! 

Features
------
Data Bot can:
1. Be your **logging** and **moderation bot**, with customizable options for logging channels.
2. Be your **General Purpose** bot, he can get you every single cute cat on reddit.
3. ~~Fulfill your Star Trek dreams of having Data on your bridge crew~~
4. **BROKEN AS OF 4/26/2019** Be your music bot and let you listen to the Star Trek OST all day long.

Dev Messages:
------
### 4/26/2019: 
>ALL MONEY/POINTS COMMANDS WILL BE REWORKED. I am working on making a new and exciting system for them, and they will be wiped/redone eventually.

Commands
------
Data Bot's default prefix is `d!` but he can also be @mentioned for commands.
<> = Necessary, [] = Optional

| Command | Syntax | Description | Developer Notes |
| :-----: | :----: | :-------------: | :---------: |
| 8Ball | d!8ball <Question> | Ask the magic 8Ball a question! | N/A |
| Avatar | d!avatar [User] | Display the avatar of a user. | You can @mention the user or just type their username, either works! | 
| Balance | d!balance [User] | Get a user's balance. | See the Dev message about points above! |
| Ban | d!ban <@User> [Reason] | Give a user the ban hammer! | @mentioning the user is necessary, you cannot type in a username. This is to avoid mis-bans |
| Booru | d!booru <Search Term> | This searches Safe Booru for whatever you wish to search for! | **WARNING:** You *may* get NSFW content with this. |
| Botinvite | d!botinvite | Invite Data Bot into your own server! | N/A |
| Channel | d!channel <What To Set> <#channel> | Configure a channel easily! | You can configure the suggestions and welcome channel with this using `suggestions` and `welcome` respectively as the first argument, and a channel as the second! |
| Config | d!config [configName] [configArgs] | This is how you can make configuration to Data Bot's functionality. | Check the **Config** guide down below for more information! This is going to be streamlined in a coming update to Data Bot! |
| Cuddle | d!cuddle @user | Cuddle a user. | N/A |
| Donate | d!donate | How to donate to the developer of Data Bot! | This is in no way necessary for the use of Data Bot, but it would make my day <3 |
| Embed | d!embed <Hexcode> <Embed Content> | Create a Discord Rich Embed easily using this! | N/A |
| Eval | d!eval <Code To Eval> | Evaluate Code | **Only I (The Bot's Owner) can use this command, I just wanted it here for reference.** |
| Gamble | d!gamble <#> | Gamble your life away by using your hard earned points to test your luck! | See the Dev message about points above! |
| Give | d!give <@User> <# Points> | Give a user points! | 1. Only the server owner can use this, 2. See the Dev message about points above! |
| Help | d!help [Command] | Need help figuring out how to use Data Bot and don't want to come here every time? Use this! | Using the command any arguments will show you all possible commands. |
| Hug | d!hug [@User] | Hug a user. | N/A |
| Info | d!info | Just a bit of lore about Data's origins. Couldn't resist adding it in :P | N/A |
| Invite | d!invite | Get an invite to the server! | Requires the `CREATE_INSTANT_INVITE` permission to use the command. |
| Issue | d!issue | Found a bug? Have a suggestion for Data? Use this! | This is the best way to report a bug or to make a suggestion, I get notifications anytime an issue or suggestion is posted! |
| Kick | d!kick <@User> [reason] | Kick a user out of the server. | N/A |
| Kitty | d!kitty | OMG KITTY! SO CUTE!!!1! | N/A |
| Leaderboard | d!leaderboard | This gets the server points leaderboard. | See the Dev message about points above! |
| Logs | d!logs <Member Logging Channel Name> <Message Logging Channel Name> <Server Logging Channel Name> <Mod Logging Channel Name> | Create and configure the logging channels! All in one command! | You need to make 4 different channels for logging to use this command, otherwise you must manually configure logging. |
| Meme | d!meme | LOL! Check out this meme! | N/A |
| Mute | d!mute <@User> | Someone being annoying? Disruptive? Mute them with this! | The muted role needs to have been configured before using this. |
| Penis | d!penis [@user] [@user]... | Get the user's penis length! 100% accurate! | N/A |
| Ping | d!ping | Pong! | N/A |
| Prefix | d!prefix [prefix] | Configure the prefix! | N/A |
| Purge | d!purge <#> | Purge up to 100 messages at a time! | N/A |
| Remind Me | d!remindme <#><D \| H \| M \| S> \<Message> | Have something important to do later? Have Data remind you of it! | Max time is 7 days, examples of the time are 24h, 45m, 30s. |
| Roles | d!roles | take a look at all the roles in the server and their IDs! | N/A |
| Rule | d!rule <1 => 10> <Rule> | Easily configure the rules of the server! | 1 => 10 correspond to Rule 1, Rule 2, etc. |
| Server Stats | d!serverstats | Get some statistics about the server! | N/A |
| Suggestion | d!suggestion | Want to make a suggestion for the server? Use this! | **1.** Use the command and then follow the instruction! **2.** Requires server admins/owner to have set up a suggestions channel |
| Unmute | d!unmute <@user> | Unmute a muted user. | N/A |
| User Info | d!userinfo [user] | Get some basic information about the user such as their roles, creation date, and server join date! | N/A |
| VC Kick | d!vckick <@user> | Kick an obnoxious user from the voice channel. | This creates a channel and moves the user into it, then deletes the channel. |

Configuration Guide
------
The possible items to configure are: `prefix`, `mutedRole`, `memberLogs`, `messageLogs`, `serverLogs`, `modLogs`, `welcomeChannel`, `suggestChannel`, `ruleOne`, `ruleTwo`, `ruleThree`, `ruleFour`, `ruleFive`, `ruleSix`, `ruleSeven`, `ruleEight`, `ruleNine`, `ruleTen`.

**ALL ITEMS HERE ARE SUBJECT TO CHANGE IN THE NEAR FUTURE**

## prefix:

>d!config prefix **{PREFIX}**

This command will allow you to set a **Custom Prefix** for Data Bot.

## mutedRole:
    
>d!config mutedRole **{ROLE ID}**

This command will allow you to set the **Muted Role** to enable the mute and unmute commands.

## memberLogs:

>d!config memberLogs **{#CHANNEL}**

This command will allow you to set the **Member Event** logging channel.

## messageLogs:

>d!config messageLogs **{#CHANNEL}**

This command will allow you to set the **Message Event** logging channel.

## serverLogs:

>d!config serverLogs **{#CHANNEL}**

This command will allow you to set the **Server Event** logging channel.

## modLogs:

>d!config modLogs **{#CHANNEL}**

This command will allow you to set the **Mod Events** logging channel.

## welcomeChannel:

>d!config welcomeChannel **{#CHANNEL}**

This command will allow you to set the **Welcome Channel**.

## suggestChannel:

>d!config suggestChannel **{#CHANNEL}**

## ruleOne <=> ruleTen:

>d!config ruleOne **{RULE TEXT}**

This command will allow you to set **Ten Rules**. These can be called by type `Rule #` in a channel the bot can see where # is a number 1 through 10.