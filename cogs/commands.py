import discord
import random
import os
import mysql.connector
from discord.ext import commands

class Commands(commands.Cog):
    
    def __init__(self, client):
        self.client = client
  
    #commands
    @commands.command()
    async def logging(self, ctx):
        print("it ran!")

        print("Setting up the Connector")
        #DATABASE SETUP STUFFSSSS
        mydb = mysql.connector.connect(
          host="localhost",
          user="halfalifeleft",
          passwd=f"{os.getenv('PWD')}",
          database="data"
        )
        
        mycursor = mydb.cursor()

        print("Show tables by the name of Guilds")

        mycursor.execute("SHOW TABLES LIKE 'guilds'")
        resultGuilds = mycursor.fetchone()

        print("Check if the guilds table exists")

        if resultGuilds:
            print("guilds exists")
        else:
            mycursor.execute("CREATE TABLE guilds (id BIGINT(255), prefix VARCHAR(255), events_channel BIGINT(255))")

        print("select \"id\" from \"guilds\" table where id = the guild ID")

        mycursor.execute(f"SELECT * FROM guilds WHERE id = {ctx.guild.id}")
        
        print("define resultID")
        
        resultID = mycursor.fetchone()

        print("check if the guild ID exists")

        if resultID:
            print("ID exists")
        else:
            sql = "INSERT INTO guilds (id, prefix, events_channel) VALUES (%s, %s, %s)"
            val = (f'{ctx.guild.id}', "d!", "584864708159340563")
            mycursor.execute(sql, val)

            mydb.commit()

            print(mycursor.rowcount, "record inserted.")

        print("show all the stuff")
            
        mycursor.execute("SELECT * FROM guilds")

        myresult = mycursor.fetchall()

        for x in myresult:
            print(x)
        
    @commands.command()
    async def ping(self, ctx):
        await ctx.send('Pong!')
        
    @commands.command(aliases=['8ball', 'eightball'])
    async def _8ball(self, ctx, *, question):
        responses = ['It is certain.',
                 'It is decidedly so.',
                 'Without a doubt.',
                 'Yes - definitely.',
                 'You may rely on it.',
                 'As I see it, yes.',
                 'Most likely.',
                 'Outlook good.',
                 'Yes.', 
                 'Signs point to yes.',
                 'Reply hazy, try again.',
                 'Ask again later.',
                 'Better not tell you now.',
                 'Cannot predict now.',
                 'Concentrate and ask again.',
                 'Don\'t count on it.',
                 'My reply is no.',
                 'My sources say no.',
                 'Outlook not so good.',
                 'Very doubtful.']
        await ctx.send(f'question: {question}\nAnswer: {random.choice(responses)}')

    @commands.command(aliases=['purge'])
    async def clear(self, ctx, amount : int): 
        await ctx.channel.purge(limit=amount + 1)
    
    @commands.command()
    async def kick(self, ctx, member : discord.Member, *, reason=None):
        await member.kick(reason=reason)
    
    @commands.command()
    async def ban(self, ctx, member : discord.Member, *, reason=None):
        await member.ban(reason=reason)
        await ctx.send('Banned {member.mention}')

    @commands.command()
    async def unban(self, ctx, *, member):
        banned_users = await ctx.guild.bans()
        member_name, member_discriminator = member.split('#')
    
        for ban_entry in banned_users:
            user = ban_entry.user
        
            if (user.name, user.discriminator) == (member_name, member_discriminator):
                await ctx.guild.unban(user)
                await ctx.send('Unbanned {user.mention}')
                return
            
    @clear.error
    async def clear_error(self, ctx, error):
        if isinstance(error, commands.MissingRequiredArgument):
            await ctx.send('Please specify an amount of messages to delete!')

def setup(client):
    client.add_cog(Commands(client))