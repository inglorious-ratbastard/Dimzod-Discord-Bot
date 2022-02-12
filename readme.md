## Dimzod Bot
#### Discord Audiophile Jukebox Bot 
___
#### **About:**
Dimzod Audiophile Jukebox was designed for the purpose of extracting audio from YouTube videos to create an enhanced multi-purpose bot for Discord. 

* Note: You have to download [FFmpeg](https://ffmpeg.zeranoe.com/builds/) in order for for this to work. 

* Limitations: Currently Repl.it does not support FFmpeg on its server for its own internal reasons. <br> This bot will **not** run any audio commands if hosted there. 

#### **Commands:**
Guild members can use the `@Dimzod` command to initilize a response from the bot.<br>
All commands must include the `dim!::! ` prefix followed by the command you wish to use.
___
#### **Express Server and Live Hosting:**
This bot is built with a Node-Express backend server for the purpose of persistent hosting. This simple server is pinged by [UptimeRobot](https://uptimerobot.com) at a preset interval thus allowing the bot to remain active even during your host site's activity timeout settings. 
*The server will run on a default `PORT` unless specified otherwise.*
___
#### **How to Install and Run:**
1. Clone the repository
`git clone` 
2. Install the dependencies
`npm install` 
3. Create environment file and set bot credentials
 add `.env` file to your project folder
4. Run the Bot (also starts the Express server)
`npm index`
5. How to Run the Server (standalone version)
`npm server`

*The bot `TOKEN`, `ID` number, and Server `PORT` number must be properly configured within your own global enviroment `.env` file otherwise it will not work.*
___
#### **Code Fixes and Updates:**
- Bugs and Errors: 
1. Index.js:62 TypeError: Cannot read property 'dispatcher' of undefined. 
`if(server.dispatcher) server.dispatcher.end();`

2. TypeError: Cannot convert "null" to int
TypeError: Cannot convert "null" to int
Error thrown upon `!play http://` command in chat. 

Updates to discord.js v12 are the reason for *some* of these issues and can be fixed/limited by making the following changes:

1. From `server.dispatcher.on`, change "end" to "finish".
2. From `server.dispatcher = connection.playStream`, remove Stream so that your code reads `connection.play()` keeping your inital parameters inside the parenthesis. 
3. All instances of `voiceChannel` have simply become `voice.channel` instead. 

These changes will limit *some* errors but not *all* of them in total. Further updates/changes will be logged as noted. 

*Updated Error Fixes*:
Remove opusscript from dependencies
Install @discordjs/opus instead
```
npm uninstall opusscript
npm install @discordjs/opus
```
Fixes the bugs and errors previously listed above. 
Audio *will* play in channel but slightly choppy. 
___
#### **Reporting Bugs or Issues:**
If you would like to report a Bug or Issue in this project feel free to do so under the Issues tab or contact me directly about any major concerns.
___
#### **Source and License:**
B-Spike Discord Bot was created by [Javier Yzaguirre](https://github.com/inglorious-ratbastard) and is considered free and open source to use as reference for those wanting to create their own bot or contribute to this project. 
___
#### **External Resources:**
[FFmpeg](https://ffmpeg.zeranoe.com/builds/)<br>
[Repl.it](https://repl.it/)<br>
[UptimeRobot](https://uptimerobot.com/)