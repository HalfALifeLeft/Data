import discord
import random
import os
import mysql.connector
from discord.ext import commands

class Config(commands.Cog):
    
    def __init__(self, client):
        self.client = client
        
    #commands
    @commands.command()
    async def prefix(self, ctx, prefix):

        #DATABASE SETUP STUFFSSSS
        mydb = mysql.connector.connect(
          host="localhost",
          user="halfalifeleft",
          passwd=f"{os.getenv('PWD')}",
          database="data"
        )
        
        mycursor = mydb.cursor()

        mycursor.execute("SHOW TABLES LIKE 'guilds'")
        resultGuilds = mycursor.fetchone()

        #Check if the guild table exists
        if resultGuilds == None:
            mycursor.execute("CREATE TABLE guilds (id BIGINT(255), prefix VARCHAR(255), events_channel BIGINT(255))")

        mycursor.execute(f"SELECT * FROM guilds WHERE id = {ctx.guild.id}")        
        resultID = mycursor.fetchone()

        #Check if the guild exists in the table
        if resultID == None:
            sql = "INSERT INTO guilds (id) VALUES (%s)"
            val = (ctx.guild.id)
            mycursor.execute(sql, val)

            mydb.commit()
            
        sql = f"UPDATE guilds SET prefix = '{prefix}' WHERE id = '{ctx.guild.id}'"

        mycursor.execute(sql)
        
        mydb.commit()
        
        mycursor.execute(f"SELECT prefix FROM guilds WHERE id = {ctx.guild.id}")        
        pfix = mycursor.fetchone()
        
        print(pfix)        
        
        ppfix = f"{pfix}".replace("('", "")
        
        print(ppfix)
        
        pppfix = ppfix.replace("',)", "")
        
        print(pppfix)
        
        await ctx.send(f"Prefix changed to `{pppfix}`")
            
def setup(client):
    client.add_cog(Config(client))