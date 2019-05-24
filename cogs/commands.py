import discord
import random
from discord.ext import commands

class Commands(commands.Cog):
    
    def __init__(self, client):
        self.client = client
  
    #commands
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
    async def clear(ctx, amount=5): 
        await ctx.channel.purge(limit=amount + 1)
    
    @commands.command()
    async def kick(ctx, member : discord.Member, *, reason=None):
        await member.kick(reason=reason)
    
    @commands.command()
    async def ban(ctx, member : discord.Member, *, reason=None):
        await member.ban(reason=reason)
        await ctx.send('Banned {member.mention}')

    @commands.command()
    async def unban(ctx, *, member):
        banned_users = await ctx.guild.bans()
        member_name, member_discriminator = member.split('#')
    
        for ban_entry in banned_users:
            user = ban_entry.user
        
            if (user.name, user.discriminator) == (member_name, member_discriminator):
                await ctx.guild.unban(user)
                await ctx.send('Unbanned {user.mention}')
                return
            
def setup(client):
    client.add_cog(Commands(client))