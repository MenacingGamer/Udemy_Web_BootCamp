var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var r = document.getElementById("r");
var p1Dis = document.querySelector("#p1Dis");
var p2Dis = document.querySelector("#p2Dis");
var maxNum = document.querySelector("input");
var playTo = document.querySelector("#playTo");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

maxNum.addEventListener("change", function(){
      playTo.textContent = maxNum.value;
      winningScore = Number(maxNum.value);
      reset();
      })
p1.addEventListener("click", function(){
	if(!gameOver){
	p1Score ++;
	if(p1Score === winningScore){
		p1Dis.classList.add("winner");
		gameOver = true;
	}
	p1Dis.textContent = p1Score;
	}
})

p2.addEventListener("click", function(){
	if(!gameOver){
	p2Score ++;
	if(p2Score === winningScore){
		p2Dis.classList.add("winner");
		gameOver = true;
	}
	p2Dis.textContent = p2Score;
	}
})

r.addEventListener("click", function(){
	reset();
	})

function reset(){
	p1Score = 0;
	p1Dis.textContent = p1Score;
	p1Dis.classList.remove("winner");
	p2Score = 0;
	p2Dis.textContent = p2Score;
	p2Dis.classList.remove("winner");
	gameOver = false;
}