import discord
import os
from discord.ext import commands, tasks
from itertools import cycle

class messageEvents(commands.Cog):
    
    def __init__(self, client):
        self.client = client
            
    @commands.Cog.listener()
    async def on_message_edit(self, before, after):
        if (before.author.bot == True):
            return
        
        color = int(os.getenv("COLOR"))
        channel = self.client.get_channel(557019452680437763)
        embed = discord.Embed(color = color)
        embed.set_author(name=f'{before.author.name}#{before.author.discriminator}', icon_url=before.author.avatar_url)
        embed.add_field(name='Old Message', value=f'```{before.content}```', inline=False)
        embed.add_field(name='New Message', value=f'```{after.content}```', inline=False)
        embed.set_footer(text=f'#{before.channel} - {embed.timestamp}')
        
        await channel.send(embed=embed)
    
    @commands.Cog.listener()
    async def on_message_delete(self, message):
        if (message.author.bot == True):
            return

        color = int(os.getenv("ERROR"))
        channel = self.client.get_channel(557019452680437763)        
        embed = discord.Embed(color = color)
        embed.set_author(name=message.author.name, icon_url=message.author.avatar_url)
        embed.add_field(name='Message', value=f'```{message.content}```')
        
        await channel.send(embed=embed)
        
    @commands.Cog.listener()
    async def on_bulk_message_delete(self, messages):
        for message in messages:
            print(message.content)
        
        channel = self.client.get_channel(557019452680437763)
        color = int(os.getenv("ERROR"))

        embed = discord.Embed(color = color)
        embed.set_author(name=message.author.name, icon_url=message.author.avatar_url)
        embed.add_field(name='Purge', value=f'{len(messages)} messages were deleted from {messages[0].channel.mention}')
        
        await channel.send(embed=embed)

    @commands.Cog.listener()
    async def on_reaction_clear(self, message, reactions):
        channel = self.client.get_channel(557019452680437763)
        color = int(os.getenv("ERROR"))

        embed = discord.Embed(color = color)
        embed.set_author(name=message.author.name, icon_url=message.author.avatar_url)
        embed.add_field(name='Reaction Purge', value=f'{len(reactions)} reactions were deleted from {message.author.mention}\'s message')
        
        await channel.send(embed=embed)
    
def setup(client):
    client.add_cog(messageEvents(client))
    
#<Message id=581595657362472960 pinned=False author=<Member id=444384280152637441 name='Half' discriminator='0001' bot=False nick=None guild=<Guild id=545522878964301825 name='The USS Enterprise' chunked=True>>>