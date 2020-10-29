
function laduj(){

	var link = document.getElementsByTagName("img");
	for(var i in link){
		link[i].onclick = function(){
			pokaz_lightbox(this.alt);
		}			
	}
};

function pokaz_lightbox(name){
	console.log(name);
	var body = document.body;
	
	var lbdiv = document.createElement("div");
	console.log("lbdiv ", lbdiv);
	lbdiv.id = "lightbox";

	lbdiv.style.cursor ='pointer';
	lbdiv.style.display ='block';
	lbdiv.style.opacity = '0.7';
	lbdiv.style.animation = 'animacja 1.5s linear';

	lbdiv.onclick = function(){
		console.log('click');

			body.removeChild(body.lastChild);
			body.removeChild(body.lastChild);
	}
	body.appendChild(lbdiv);

		var bigfoto = document.createElement("img");
		bigfoto.id = "bigfoto";
		bigfoto.src = "zdjecia/" + name + ".jpg";
		setTimeout(function() {
			body.appendChild(bigfoto);
			ustawbigfoto();
			bigfoto.style.cursor ='default';
		}, 1000);
}

function setSize(bf) {
	var szerObr = bf.width;
	// var w = maxSzer/szerObr;
	var wysObr = bf.height;
	// var h = maxWys/wysObr;
	var new_size = {};
	var min = Math.min(maxSzer/szerObr, maxWys/wysObr);
	new_size.width = szerObr * min;
	new_size.height = wysObr * min;	
	return new_size;
}	

function ustawbigfoto(){
	var bf = document.getElementById("bigfoto");
	if(bf){

		var wymObj = setSize(bf);
		var szer = wymObj.width;
		var wyso = wymObj.height;
		console.log(szer + ' x ' + wyso + '...' + window.innerWidth +'x'+ window.innerHeight);
		console.log(bigfoto.offsetParent);		

		var bfX = (window.innerWidth - szer)/2; 
		var bfY = (window.innerHeight - wyso)/2;

		bf.style.width = szer +"px"; 
		bf.style.height = wyso+ "px";
		
		bf.style.left = bfX +"px"; 
		bf.style.top  = bfY + "px";
	}
}	

var maxSzer = 400;
var maxWys  = 300;

window.onload = function() {
	laduj();
};

window.onresize = function(){
	ustawbigfoto();
}



