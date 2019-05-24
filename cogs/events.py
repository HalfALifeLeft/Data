import discord
from discord.ext import commands, tasks
from itertools import cycle

#status = cycle(['Status 1', 'Status 2'])

class Events(commands.Cog):
    
    def __init__(self, client):
        self.client = client
                      
    #events 
    
    @commands.Cog.listener()
    async def on_ready(self):
        self.change_status.start()
        print('Bot is ready!')
    
    @tasks.loop(seconds=10)
    async def change_status(self):
        print('Guess I started the loop!')
        #await self.client.change_presence(activity=discord.Game(next(status)))
        await self.client.change_presence(activity=discord.Game(f'in {len(self.client.guilds)} Servers for {len(self.client.users)} Users!'))
        print(f'Working in {len(self.client.guilds)} Servers for {len(self.client.users)} Users!')
    
    @commands.Cog.listener()
    async def on_member_join(self, member):
        print(f'{member} has joined a server.')

    @commands.Cog.listener()
    async def on_member_remove(self, member):
        print(f'{member} has been removed from a server.')
        
def setup(client):
    client.add_cog(Events(client))