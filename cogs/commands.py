import discord
import random
import pytz
from datetime import datetime
import os
import mysql.connector
from discord.ext import commands

class Commands(commands.Cog):
    
    def __init__(self, client):
        self.client = client
  
    #commands        
    @commands.command()
    async def ping(self, ctx):
        message = await ctx.send('Pong!')
        latency = round(self.client.latency*1000, 2)
        now = datetime.now()
        timestamp_now = datetime.timestamp(now)
        await message.edit(content=f'Pong! Editing A Message!')
        after_send = datetime.now()
        timestamp_send = datetime.timestamp(after_send)
        time_to_edit = round(((timestamp_send - timestamp_now) * 100), 1)
        await message.edit(content=f'Pong! Editing a message took: {time_to_edit} ms, Discord is reporting a WebSocket latency of: {latency} ms')
        
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