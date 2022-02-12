module.exports = {
    name: "skip",
    desciption: "audio queue",
    execute(msg, args) {

        var servers = {};
       
        var server = servers[msg.guild.id];
        if(server.dispatcher) server.dispatcher.end();

    }
  }