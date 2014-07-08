console.log('script.js loaded');

//Computer's choice

function computerChoice() {
	var number = Math.random();
	if (number >= 0 && number <= 0.3333333333) {
		return "rock";
	} else if (number <= 0.66666666666) {
		return "paper";
	} else {
		return "scissors";
	}
}

//User's choice
$(".user").on('click', function(){
	var computer = computerChoice();
	var user = this.id;
	var result = compare(computer, user);
	$("#result").html(result);
	$("#computer").html(computer);
	$("#user").html(user);
});

//Compare: Computer v. User
function compare(x, y) {
	if (x == y) {
		return "It's a tie!";
	} else if (x === "rock") {
		if (y === "scissors") {
			return "Computer wins.";
		} else {
			return "You win!";
		}
	} else if (x === "scissors") {
		if (y === "paper") {
			return "Computer wins.";
		} else {
			return "You win!";
		}
	} else {
		if (y === "rock") {
			return "Computer wins.";
		} else {
			return "You win!";
		}
	}
}