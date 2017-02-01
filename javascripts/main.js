var jq=$.noConflict();
jq(function(){
	jq("#dl").hide();
	jq("button").click(function(){
		jq("#dl").fadeToggle();
		jq("#panel").slideToggle("slow");
		jq("#animate").animate({
			left:"250px",
			opacity:"0.5",
			height:"150px",
			width:"150px"
		});
	});
		
})

