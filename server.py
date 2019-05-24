import discord
import os
import logging
from discord.ext import commands, tasks
from itertools import cycle

client = commands.Bot(command_prefix = '!')

@client.command()
async def load(ctx, extension):
    client.load_extension(f'cogs.{extension}')
    
@client.command()
async def unload(ctx, extension):
    client.unload_extension(f'cogs.{extension}')
    
@client.command()
async def reload(ctx, extension):
    client.unload_extension(f'cogs.{extension}')
    client.load_extension(f'cogs.{extension}')
    
for filename in os.listdir('./cogs'):
    if filename.endswith('.py'):
        client.load_extension(f'cogs.{filename[:-3]}')

logger = logging.getLogger('discord')
logger.setLevel(logging.DEBUG)
handler = logging.FileHandler(filename='discord.log', encoding='utf-8', mode='w')
handler.setFormatter(logging.Formatter('%(asctime)s:%(levelname)s:%(name)s: %(message)s'))
logger.addHandler(handler)
    
client.run('NTQzMzQ0OTQwMTYwMTIyODgx.XK1SQQ.NjTsCOGy_sIsBd968330JCPTf70')

#nodemon --exec py -3 server.py