import discord
from discord.ext import commands

class Events(commands.Cog):
    
    def __init__(self, client):
        self.client = client
           
    #events 
    @commands.Cog.listener()
    async def on_ready(self):
        print('Bot is ready!')
        
    @commands.Cog.listener()
    async def on_member_join(self, member):
        print(f'{member} has joined a server.')

    @commands.Cog.listener()
    async def on_member_remove(self, member):
        print(f'{member} has been removed from a server.')
        
def setup(client):
    client.add_cog(Events(client))