var Hapi = require("hapi");


var server = new Hapi.Server();


server.connection({
	port:8888
});

server = require("./routes.js")(server);



server.start(function() {
	console.log("Server started");
})