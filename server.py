import discord
import os
import logging
import mysql.connector
from Client import Prefix
from dotenv import load_dotenv
from discord.ext import commands, tasks
from itertools import cycle
load_dotenv()

def prefix(client, message):
    return Prefix.Prefix(client, message)

client = commands.Bot(command_prefix = prefix)

#mycursor.execute("ALTER TABLE guilds ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY")

#mycursor.execute("SHOW TABLES")

#for x in mycursor:
#  print(x)

#sql = "INSERT INTO guilds (prefix, events_channel) VALUES (%s, %s)"
#val = ("d!", "584864708159340563")
#mycursor.execute(sql, val)

#mydb.commit()

#print(mycursor.rowcount, "record inserted.")

#

#mycursor.execute("SHOW DATABASES")

#for x in mycursor:
#  print(x)

#mycursor.execute("CREATE DATABASE data")

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
    
client.run(os.getenv("TOKEN"))

#nodemon --exec py -3 server.py