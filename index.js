const Discord = require('discord.js');
const bot = new Discord.Client();
// const ytdl = require('ytdl-core');
require('dotenv').config();

const app = require('./server');

const PREFIX = "dim!::!";
const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

// var server = {};

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
  console.log("Chew bubblegum and kick some ass!");
});

bot.on('message', msg => {
  if (msg.guild == null) return;
  if (msg.author.bot) return;

  if (msg.mentions.members.first() !== undefined){
    if(msg.mentions.members.first().id == process.env.ID){
        msg.channel.send('*Welcome to the Dimzod Media Jukebox.*')
    }
  }

 let args = msg.content.substring(PREFIX.length).split(" ");

  switch(args[0]) {

    case 'play':
      bot.commands.get('play').execute(msg, args);
      break;
 
    case 'skip':
      bot.commands.get('skip').execute(msg, args);
      break;
    
    case 'stop':
      bot.commands.get('stop').execute(msg, args);
      break;  
   }

     
});

bot.on("error", (e) => {
  console.error(e);
  console.log("We're all out of bubblegum..");
  }); 

 bot.login(process.env.TOKEN);
 