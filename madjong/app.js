let click = 0;
let couples = 0;
let countClick = 0;
let seconds = 9;
let seconds1 = 5;
let minutes = 9;
let firstClick = 0;
let timer;
let firstCard;
let secondCard;
let cards = ["images/kingchervi.png", "images/queenchervi.png", "images/jackchervi.png", "images/kingchervi.png", "images/queenchervi.png", "images/jackchervi.png", "images/acechervi.png", "images/acechervi.png", "images/kingviny.png", "images/queenviny.png", "images/jackviny.png", "images/kingviny.png", "images/queenviny.png", "images/jackviny.png", "images/aceviny.png", "images/aceviny.png"];

let front = document.getElementsByClassName('front');
shuffleCards = shuffle(front);

function shuffle(array) {
	let index;
	for (let i = 0; i < array.length; i++) {
		index = Math.floor(Math.random() * cards.length);
		array[i].src = cards[index];
		cards.splice(index, 1);
	}
	return array;
}

document.getElementById('memory_game').onclick = function (event) { 
	if (firstClick == 0) {
		firstClick++;
		clock(); 
	}
	if (click == 0) {
		if (event.target.className == "back") {
			event.target.src = event.target.nextElementSibling.src;
			firstCard = event.target;
			click++;
			countClick++;
			document.getElementById("countClick").innerHTML = countClick;
		}
	} else if (click == 1) {
		if (event.target.className == "back") {
			if (firstCard.id == event.target.id) {
				alert("Эта карта уже открыта! Пожалуйста, выберите другую карту.");
			} else {
				event.target.src = event.target.nextElementSibling.src;
				secondCard = event.target; 
				click++;
				countClick++;
				document.getElementById("countClick").innerHTML = countClick;
				timer = setInterval(check, 1000);
			} 
		} 
	} else {
		if (event.target.className == "back")
		alert("Одновременно могут быть открыты только 2 карты!");
	}
}

function check() {
	clearInterval(timer);	
	click = 0;
	if (firstCard.src == secondCard.src) {
		firstCard.style.visibility = "hidden";
		secondCard.style.visibility = "hidden";
		couples++;
		if (couples == 8) {
			alert("ВЫ НАШЛИ ВСЕ ПАРЫ! ПОЗДРАВЛЯЕМ С ПОБЕДОЙ! :) \nКоличество нажатий: " + countClick);
			location.reload();
		}
	} else {
		firstCard.src = "images/joker.png";
		secondCard.src = "images/joker.png";
	}
	return;
}

function randColor() {
	let red = Math.floor(Math.random() * (256)),
	green = Math.floor(Math.random() * (256)),
	blue = Math.floor(Math.random() * (256));
return '#' + red.toString(16) + green.toString(16) + blue.toString(16);
}

console.log(randColor());
function clock() {
	if (seconds > 0) {
		seconds = seconds - 1;
	} else if (seconds1 > 0) {
		seconds1 = seconds1 - 1;
		seconds = 9;
	} else if (minutes > 0) {
		minutes = minutes - 1;
		seconds = 9;
		seconds1 = 5;
	} else if (minutes == 0) {
		alert("Время закончилось! К сожалению, вы проиграли :(");
		location.reload();
	}
	document.getElementById('clock').style.color = randColor();
	document.getElementById('clock').innerHTML = minutes + ":" + seconds1 + seconds;


	time = setTimeout(clock, 1000);
}

