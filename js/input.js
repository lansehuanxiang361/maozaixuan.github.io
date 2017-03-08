var getId = function(id) {
	return document.getElementById(id);
}
var addEvent = function(element,event,fn) {
	var el = element||document;
	if(el.addEventListener) {
		el.addEventListener(event,fn,false);
	}else if(el.attachEvent) {
		el.attachEvent("on" + event,fn);
	}
}
addEvent(getId("nav-search"),"click",function() {
	getId("nav-form").style.border = "2px solid blue";
});
addEvent(document,"click",function(event) {
	var event = event || window.event;
	var elem = event.target || event.srcElement;
	while(elem) {
		if(elem.id && elem.id == "nav-search") {
			return;
		}
		else if(elem.nodeName.toLowerCase() != "html") {
			elem = elem.parentNode;
		}
		else {
			getId("nav-form").style.border = "0";
			return;
		}
	}
});

