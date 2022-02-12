module.exports = {
    name: "stop",
    desciption: "end queue",
    execute(msg, args) {
        
      var servers = {};
      
      var server = servers[msg.guild.id];
      if(msg.guild.voiceConnection){
        for(var i = server.queue.length -1; i <= 0; i--){


          server.queue.splice(i, 1);
        }

         server.dispatcher.end();
        // message.channel.send("Ending the queue and leaving Voice channel.")
        // console.log("Stopped the queue");
      }
         if(msg.guild.connection) msg.guild.voiceConnection.disconnect();
          
    }
  }