var Hapi = require("hapi");


var server = new Hapi.Server();


server.connection({
	port:80,
	routes:{cors:true}
});

server = require("./routes.js")(server);



server.start(function() {
	console.log("Server started");
});