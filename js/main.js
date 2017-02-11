var jq=$.noConflict();
jq(function(){
	jq("#panel").hide();
	jq("#flip").click(function(){
		jq("#panel").slideToggle("slow");
	});
		
})

