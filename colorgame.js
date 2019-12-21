var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	// Mode Buttons Event Listeners
	for(var i =0;i < modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	// Add Event Listeners to the Squares
	for(var i = 0;i < squares.length;i++){
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
	 		}
		});
	}
}

function reset(){
	// Generate new colors and new colors array
	colors = generateRandomColors(numSquares);
	// Generate new color to be the correct color
	pickedColor = pickColor();
	// Change the display of h1 to show pickedColor
	colorDisplay.textContent = pickedColor;
	// Change colors of the square
	for(var i = 0;i < squares.length;i++){
		// Add colors to square
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click",function(){
	reset();
})

function changeColors(color){
	// Change color of squares to that of the winning color.
	for(var i = 0;i< squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	// Select a random color from the colors array.
	var randomColor = Math.floor(Math.random()*colors.length);
	return colors[randomColor];
}

function generateRandomColors(num){
	// Create the colors array with random colors.
	var arr = [];
	for(var i = 0;i < num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// Red
	var r = Math.floor(Math.random()*256);
	// Green
	var g = Math.floor(Math.random()*256);
	// Blue
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}