// for the computer generated number that player is trying to match
var gemNum;
// for the number value of the gems
var blueNum;
var greenNum;
var purpleNum;
var redNum;
// for the accmulated number value by the player
var currScore = 0;
// counters to keep track of wins and losses
var wins = 0;
var losses = 0;

$(document).ready(function() {
	// starts the game
	function start(){
		currScore = 0;
		$("#totalScore").html(currScore);
		// generate the random number 
		gemNum = Math.floor(Math.random()*102)+19;
		// display the random number on the page
		$("#randomNum").html(gemNum);
		// generate randoms for the gems
		blueNum = Math.ceil(Math.random()*12);
		greenNum = Math.ceil(Math.random()*12);
		purpleNum = Math.ceil(Math.random()*12);
		redNum = Math.ceil(Math.random()*12);
	};
	// make each button click on gems add to the total currScorce
	$("#blue").click(function(){
		currScore += blueNum;
    $("#totalScore").html(currScore);
    gameStatus();
  });
  	$("#green").click(function(){
		currScore += greenNum;
    $("#totalScore").html(currScore);
    gameStatus();
  });
  	$("#purple").click(function(){
		currScore += purpleNum;
    $("#totalScore").html(currScore);
    gameStatus();
  });
  	$("#red").click(function(){
		currScore += redNum;
    $("#totalScore").html(currScore);
    gameStatus();
  });

  function gameStatus(){
  	if(currScore === gemNum){
  		wins++;
  		$("#win").html(wins);
  		start();
  	}
  	else if(currScore > gemNum){
  		losses++;
  		$("#loss").html(losses);
  		start();
  	}
  }

	start();
});