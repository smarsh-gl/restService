function dealWithRoutes(server) {
	
	
	
	
	
	
	
	server.route({
		method:"GET",
		path:"/array1",
		handler: function(request, reply) {
			var ret = [
				{"name":"Steve"},
				{"name":"Fred"}
			];
			setTimeout(function() {
				reply(ret);				
			},3000);
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
	
	
	return server;
}


module.exports = dealWithRoutes;