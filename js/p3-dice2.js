function makeDiceImage (nDots){
	var dieImage, diceImageArray;
	diceImageArray =
	['<img src = "assets/diceImages/dice-1.png" alt = "Dice 1 dot" height = "80">',
	'<img src = "assets/diceImages/dice-2.png" alt = "Dice 2 dot" height = "80">',
	'<img src = "assets/diceImages/dice-3.png" alt = "Dice 3 dot" height = "80">',
	'<img src = "assets/diceImages/dice-4.png" alt = "Dice 4 dot" height = "80">',
	'<img src = "assets/diceImages/dice-5.png" alt = "Dice 5 dot" height = "80">',
	'<img src = "assets/diceImages/dice-6.png" alt = "Dice 6 dot" height = "80">'
	]
	dieImage = diceImageArray[nDots - 1];
	return dieImage;
}

	function makeCardImage (cImg){
	var cardImage, cardImageArray;
	cardImageArray =
	['<img src = "assets/cardImages/g-1.jpg" alt = "Dice 1 dot" height = "400" width = "300">',
	'<img src = "assets/cardImages/b-1.jpg" alt = "Dice 6 dot" height = "400" width = "300">',
	'<img src = "assets/cardImages/g-2.jpg" alt = "Dice 2 dot" height = "400" width = "300">',
	'<img src = "assets/cardImages/g-3.jpg" alt = "Dice 3 dot" height = "400" width = "300">',
	'<img src = "assets/cardImages/g-4.jpg" alt = "Dice 4 dot" height = "400" width = "300">',
	'<img src = "assets/cardImages/g-5.jpg" alt = "Dice 5 dot" height = "400" width = "300">',
	'<img src = "assets/cardImages/g-6.jpg" alt = "Dice 6 dot" height = "400" width = "300">',
	'<img src = "assets/cardImages/b-2.jpg" alt = "Dice 6 dot" height = "400" width = "300">',
	'<img src = "assets/cardImages/b-3.jpg" alt = "Dice 6 dot" height = "400" width = "300">',
	'<img src = "assets/cardImages/b-4.jpg" alt = "Dice 6 dot" height = "400" width = "300">',
	]
	cardImage = cardImageArray[cImg - 1];
	return cardImage;
}

function drawCard() {
	var out, card, resultLine_card, randNum, randNum2;
	//alert('Roll Dice');
	out = document.getElementById('outputCard')
	randNum = Math.random();
	randNum2 = Math.random();
	if (randNum < .06){
		card = randomInt(1, 2);
		resultLine_card = makeCardImage(card) + '<br>';
	}
	else if (randNum < .66) {
		card = randomInt(3, 7);
		resultLine_card = makeCardImage(card) + '<br>';
	}
	else if (randNum < .99) {
		card = randomInt(8, 10);
		resultLine_card= makeCardImage(card) + '<br>';
	}
	out.innerHTML = resultLine_card;
}

function rollDice() {
	var out, die1, die2, resultLine, i, limit;
	//alert('Roll Dice');
	out = document.getElementById('outputDiv')
	die1 = randomInt(1, 6);
	die2 = randomInt(1, 6);
	resultLine = makeDiceImage(die1) + ' ' + makeDiceImage(die2) + '<br>';
	out.innerHTML = out.innerHTML + resultLine;
}

function roll3Dice() {
	var out, die1, die2, die3, resultLine, i, limit;
	//alert('Roll Dice');
	out = document.getElementById('outputDiv')
	die1 = randomInt(1, 6);
	die2 = randomInt(1, 6);
	die3 = randomInt(1, 6);
	resultLine = makeDiceImage(die1) + ' ' + makeDiceImage(die2) + ' ' + makeDiceImage(die3) + '<br>';
	out.innerHTML = out.innerHTML + resultLine;
}

function roll4Dice() {
	var out, die1, die2, die3, die4, resultLine, i, limit;
	//alert('Roll Dice');
	out = document.getElementById('outputDiv')
	die1 = randomInt(1, 6);
	die2 = randomInt(1, 6);
	die3 = randomInt(1, 6);
	die4 = randomInt(1,6);
	resultLine = makeDiceImage(die1) + ' ' + makeDiceImage(die2) + ' ' + makeDiceImage(die3) + ' ' + makeDiceImage(die4) + '<br>';
	out.innerHTML = out.innerHTML + resultLine;
}

function clear() {
	var out, resultLine,resultLine_card;
	out = document.getElementById('outputDiv');
	resultLine='';
	out.innerHTML = resultLine;
	out = document.getElementById('outputCard');
	resultLine_card = ' ';
	out.innerHTML = resultLine_card;
}



function init(){
	var button, button2, button3, button4, button5;
	//alert('Init Started')
	button = document.getElementById('rollButton');
	button.onclick = rollDice;
	button2 = document.getElementById('roll3btn');
	button2.onclick = roll3Dice;
	button3 = document.getElementById('roll4btn');
	button3.onclick = roll4Dice;
	button4 = document.getElementById('clearall');
	button4.onclick = clear;
	button5 = document.getElementById("drawCard");
	button5.onclick = drawCard;
}

window.onload = init;
