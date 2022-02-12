const ytdl = require('ytdl-core');

module.exports = {
    name: "play",
    desciption: "play YT Audio",
    execute(msg, args) {   

        var servers = {};

        function play(connection, msg){
            var server = servers[msg.guild.id];
     
            server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
            server.queue.shift();
           
            server.dispatcher.on("finish", function(){
             if(server.queue[0]){
               play(connection, msg);
             } else {
               connection.disconnect();
             }
            });
     
         }
     
             if(!args[1]){
              msg.channel.send("Please provide a valid YouTube video link.");
               return;
             }
             
             if(!msg.member.voice.channel){
               msg.channel.send("You must be in a Voice channel in order to play the audio.");
               return;
             }
     
             if(!servers[msg.guild.id]) servers[msg.guild.id] = {
               queue: []
             }
     
             var server = servers[msg.guild.id];
             server.queue.push(args[1]);
     
             if(!msg.guild.voiceConnection) msg.member.voice.channel.join().then(function(connection){
               play(connection, msg);
             });
             
    }
  }