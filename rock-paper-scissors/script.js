console.log('script.js loaded');

//Computer's choice

function computerChoice () {
	var number = Math.random();
	if (number >= 0 && number <= 0.3333333333) {
		return "Rock";
	} else if (number <= 0.66666666666) {
		return "Paper";
	} else {
		return "Scissors";
	}
}
console.log(computerChoice());
//User's choice

//Compare: Computer v. User