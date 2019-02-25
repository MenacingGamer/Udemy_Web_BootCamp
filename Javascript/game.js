var wrightNum = 7;
var userGuess = prompt("PICK A NUMBER BETWEEN 0 AND 10");


 if (Number(userGuess) === wrightNum){
 	alert("You picked the wright number");
}

else if (Number(userGuess) < wrightNum){

	alert("TOO LOW");
}
else{
  	alert("TOO HIGH");
  }