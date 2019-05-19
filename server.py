import discord
import sys

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

    if message.content.startswith('$exit'):
        await sys.exit()

client.run('NTQzMzQ0OTQwMTYwMTIyODgx.XK1SQQ.NjTsCOGy_sIsBd968330JCPTf70')