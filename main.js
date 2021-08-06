const img = document.querySelector("#idle");
const jsbutton = document.querySelector('#js');
const javabutton = document.querySelector('#java');
const pybutton = document.querySelector('#py');

const upgradebutton = document.querySelector('#upgrade');

let money = 0;
let checkjs = false;
let checkpy = false;
let selected = 1;
let upgradecost = 100;

img.addEventListener('click', () => {
	money += selected;
document.querySelector("#amount").innerText = "You have $"+moneynotation(money);
});

jsbutton.addEventListener('click', () => {
	if (money >= 100 || checkjs) {
		jsbutton.innerText = "Unlocked JS";
		img.src = "images/Javascript.png";
		if (!checkjs) {
		money -= 100;
		document.querySelector("#amount").innerText = "You have $"+moneynotation(money);
		checkjs = true;
	}
	}
});

pybutton.addEventListener('click', () => {
	if (money >= 400 || checkpy) {
		pybutton.innerText = "Unlocked Python";
		img.src = "images/Python.png";
		if (!checkpy) {
		money -= 400;
		document.querySelector("#amount").innerText = "You have $"+moneynotation(money);
		checkpy = true;
	}
	}
});

javabutton.addEventListener('click', () => { 
		img.src = "images/javaemoji.png";
	});

upgradebutton.addEventListener('click', () => { 
	if (money >= upgradecost) {
		money -= upgradecost;
		upgradecost = Math.floor(upgradecost * 1.5);
		selected *= 2;
		document.querySelector("#amount").innerText = "You have $"+moneynotation(money);
		upgradebutton.innerText = "Upgrade Click need $"+moneynotation(upgradecost);
	}
})

let moneynotation2 = (money) => {
	let zeros = money.toLocaleString('fullwide', { useGrouping: false });
	if (zeros.length === 4 || zeros.length === 5 || zeros.length === 6) {
		money /= 1000;
		money = Math.round(money * 10) / 10;
		return money + "K";
	} else if (zeros.length === 7 || zeros.length === 8 || zeros.length === 9) {
		money /= 1000000;
		money = Math.round(money * 10) / 10;
		return money + " Million";
	} else if (zeros.length === 10 || zeros.length === 11 || zeros.length === 12) {
		money /= 1000000000;
		money = Math.round(money * 10) / 10;
		return money + " Billion";
	} else if (zeros.length === 13 || zeros.length === 14 || zeros.length === 15) {
		money /= 1000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Trillion";
	} else if (zeros.length === 16 || zeros.length === 17 || zeros.length === 18) {
		money /= 1000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Quadrillion";
	} else if (zeros.length === 19 || zeros.length === 20 || zeros.length === 21) {
		money /= 1000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Quintillion";
	} else if (zeros.length === 22 || zeros.length === 23 || zeros.length === 24) {
		money /= 1000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Sextillion";
	} else if (zeros.length === 25 || zeros.length === 26 || zeros.length === 27) {
		money /= 1000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Septillion";
	} else if (zeros.length === 28 || zeros.length === 29 || zeros.length === 30) {
		money /= 1000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Octillion";
	} else if (zeros.length === 31 || zeros.length === 32 || zeros.length === 33) {
		money /= 1000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Nonillion";
	} else if (zeros.length === 34 || zeros.length === 35 || zeros.length === 36) {
		money /= 1000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Decillion";
	} else if (zeros.length === 37 || zeros.length === 38 || zeros.length === 39) {
		money /= 1000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Undecillion";
	} else if (zeros.length === 40 || zeros.length === 41 || zeros.length === 42) {
		money /= 1000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Duodecillion";
	} else if (zeros.length === 43 || zeros.length === 44 || zeros.length === 45) {
		money /= 1000000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Tredecillion";
	} else if (zeros.length === 46 || zeros.length === 47 || zeros.length === 48) {
		money /= 1000000000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Quattuordecillion";
	} else if (zeros.length === 49 || zeros.length === 50 || zeros.length === 51) {
		money /= 1000000000000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Quindecillion";
	} else if (zeros.length === 52 || zeros.length === 53 || zeros.length === 54) {
		money /= 1000000000000000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Sexdecillion";
	} else if (zeros.length === 55 || zeros.length === 56 || zeros.length === 57) {
		money /= 1000000000000000000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Septendecillion";
	} else if (zeros.length === 58 || zeros.length === 59 || zeros.length === 60) {
		money /= 1000000000000000000000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Octodecillion";
	} else if (zeros.length === 61 || zeros.length === 62 || zeros.length === 63) {
		money /= 1000000000000000000000000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Novemdecillion";
	} else if (zeros.length === 64 || zeros.length === 65 || zeros.length === 66) {
		money /= 1000000000000000000000000000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Vigintillion";
	} else if (zeros.length === 67 || zeros.length === 68 || zeros.length === 69) {
		money /= 1000000000000000000000000000000000000000000000000000000000000000000;
		money = Math.round(money * 10) / 10;
		return money + " Unvigintillion";
	} else {
		return money;
	}
}

let moneynotation = (money) => { 
	let zeros = money.toLocaleString('fullwide', { useGrouping: false });
	let abrevation = ["", "K", " Million", " Billion", " Trillion", " Quadrillion", " Quintillion", " Sextillion", " Septillion", " Octillion", " Nonillion", " Decillion", " Undecillion", " Duodecillion", " Tredecillion", " Quattuordecillion", " Quindecillion", " Sexdecillion", " Septendecillion", " Octodecillion", " Novemdecillion", " Vigintillion", " Unvigintillion", " Duovigintillion", " Trevigintillion", " Quattuorvigintillion", " Quinvigintillion", " Sesvigintillion", " Septenvigintillion", " Octovigintillion"];
	let findNumber = Math.floor(((zeros.length - 1) / 3));
	money /= Math.pow(1000, findNumber);
	money = Math.round(money * 10) / 10;
	return money + abrevation[findNumber];
}