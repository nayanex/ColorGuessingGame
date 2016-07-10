var colors = ["Beige", "Black", "Blue", "Brown", "Coral", "Cyan", "Gold", "Gray", 
  		      "Indigo", "Ivory", "Khaki", "Lavender", "Lime", "Magenta", "Navy",
		      "Olive", "Orange", "Orchid", "Purple", "Red", "Salmon", "Silver" ]
		     .sort();
var finished = false;
var targetIndex;
var targetColor;
var guessInput;
var numberOfGuesses = 0;

function generateRandomColor(){
	targetIndex = Math.floor(Math.random()*colors.length);
	targetColor = ignoreUpperLowerCase(colors[targetIndex]);
};

function isGuessInputValid(input){
	for (var i = 0; i < colors.length; i++) {
		if (colors[i].toLowerCase() === input)
			return true;
	};
	return false;
};

function ignoreUpperLowerCase(input){
	return input.trim().toLowerCase();
};

function changeBackgroundColor(color){
	myBody=document.getElementsByTagName("body")[0];
	myBody.style.background = color;
};

function checkGuess(guessInput, numberOfGuesses){
	if (!isGuessInputValid(guessInput)) {
		alert("Sorry, I don't recognize your color.\n\n" + 
			  "Please try again.");
		return false;
	};
	if (guessInput > targetColor) {
		alert("Sorry, your guess is not correct!\n\n" +
			  "Hint: your color is alphabeticaly higher than mine.\n\n" +
			  "Please try again");
		return false;
	};
	if (guessInput < targetColor) {
		alert("Sorry, your guess is not correct!\n\n" +
			  "Hint: your color is alphabeticaly lower than mine.\n\n" +
			  "Please try again");
		return false;
	};
	changeBackgroundColor(targetColor);
	alert("Congratulations! You have guessed the color!\n\n" +
		  "It took you " + numberOfGuesses + 
		  " guess(es) to finish your game!\n\n" +
	  	  "You can see the color in the background.");
	return true;
}

function doGame(){
	generateRandomColor();
	while(!finished){
		guessInput = prompt("I am thinking of one of these colors:\n\n" +
						     colors.join(", ") + "\n\n" +
						    "What color am I thinking of?");
		guessInput = ignoreUpperLowerCase(guessInput);
		numberOfGuesses++;
		finished = checkGuess(guessInput, numberOfGuesses);
	}
}