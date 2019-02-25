var isBlue = false;
var isRed = false;
var isGreen = false;
var isPurple = false;


var blue = document.querySelector(".blue");
blue.addEventListener("click", function(){
	if(isBlue){
	document.body.style.background = "white";
    	blue.style.background = "white";
    	isBlue = false;
    }else{
    	document.body.style.background = "blue";
	blue.style.background = "blue"; 
	isBlue = true;	
    }
})

var red = document.querySelector(".red");
red.addEventListener("click", function(){
	if(isRed){
	document.body.style.background = "white";
	red.style.background = "white";
	isRed = false;
  }else{
  	document.body.style.background = "red";
	red.style.background = "red";
	isRed = true;
  }
})
var green = document.querySelector(".green");
green.addEventListener("click", function(){
	if(isGreen){
	document.body.style.background = "white";
	green.style.background = "white";
	isGreen = false;
   }else{
   	document.body.style.background = "green";
	green.style.background = "green";
	isGreen = true;
   }
})

var purple = document.querySelector(".purple");
purple.addEventListener("click", function(){
	if(isPurple){
	document.body.style.background = "white";
	purple.style.background = "white";
	isPurple = false;
  }else{
  	document.body.style.background = "purple";
	purple.style.background = "purple";
	isPurple = true;
  }
})