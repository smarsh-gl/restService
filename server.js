var Hapi = require("hapi");


var server = new Hapi.Server();


server.connection({
	port:8888
});



server.route({
	method:"GET",
	path:"/array1",
	handler: function(request, reply) {
		var ret = [
			{"name":"Steve"},
			{"name":"Fred"}
		];
		reply(ret);
	}
});
server.route({
	method:"GET",
	path:"/array2",
	handler: function(request, reply) {
		var ret = [
			{"name":"Joe"},
			{"name":"Earl"}
		];
		reply(ret);
	}
});
server.route({
	method:"GET",
	path:"/array3",
	handler: function(request, reply) {
		var ret = [
			{"name":"Frank"},
			{"name":"Julie"}
		];
		reply(ret);
	}
});



server.start(function() {
	console.log("Server started");
})