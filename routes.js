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
			},500);
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
			setTimeout(function() {
				reply(ret);				
			},0);
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
			setTimeout(function() {
				reply(ret);				
			},1500);
		}
	});
	
	server.route({
		method:"GET",
		path:"/spa/page1",
		handler: function(request, reply) {
			var ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			
			setTimeout(function() {
				reply({
					"pageID":"1",
					"content":ipsum
				});
			},700);
		}
	});
	
	server.route({
		method:"GET",
		path:"/spa/page2",
		handler: function(request, reply) {
			var ipsum = "Bacon ipsum dolor amet tail pork chop beef ribs landjaeger, pig shankle corned beef swine sausage meatloaf. Alcatra fatback flank turducken bacon filet mignon, shoulder tenderloin pork. Sirloin cow tri-tip jerky meatball, chicken frankfurter tongue pork bresaola leberkas ribeye sausage. Shankle boudin biltong jowl chuck ribeye pork loin t-bone bacon capicola pancetta alcatra. Ball tip jowl sirloin, pancetta shoulder t-bone meatloaf. Doner boudin landjaeger capicola swine salami leberkas drumstick strip steak. Cupim ribeye sausage tri-tip landjaeger shank, rump beef ribs pancetta short loin ball tip biltong hamburger leberkas.";
			
			setTimeout(function() {
				reply({
					"pageID":"2",
					"content":ipsum
				});
			},1300);
		}
	});
	
	
	return server;
}


module.exports = dealWithRoutes;