import mysql.connector
import discord
import os
import sys

def Prefix(client, message):
    

    prefix = "!"

    mydb = mysql.connector.connect(
        host="localhost",
        user="halfalifeleft",
        passwd=f"{os.getenv('PWD')}",
        database="data"
    )

    mycursor = mydb.cursor()

    mycursor.execute("SHOW TABLES LIKE 'guilds'")
    resultGuilds = mycursor.fetchone()

    if resultGuilds:
        mycursor.execute(f"SELECT prefix FROM guilds WHERE id = {message.guild.id}")
        resultID = mycursor.fetchone()
        prefix = resultID
    else:
        prefix = "!"
        
    return prefix

