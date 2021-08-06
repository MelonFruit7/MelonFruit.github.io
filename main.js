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

let moneynotation = (money) => { 
	let zeros = money.toLocaleString('fullwide', { useGrouping: false });
	let abrevation = ["", "K", " Million", " Billion", " Trillion", " Quadrillion", " Quintillion", " Sextillion", " Septillion", " Octillion", " Nonillion", " Decillion", " Undecillion", " Duodecillion", " Tredecillion", " Quattuordecillion", " Quindecillion", " Sexdecillion", " Septendecillion", " Octodecillion", " Novemdecillion", " Vigintillion", " Unvigintillion", " Duovigintillion", " Trevigintillion", " Quattuorvigintillion", " Quinvigintillion", " Sesvigintillion", " Septenvigintillion", " Octovigintillion"];
	let findNumber = Math.floor(((zeros.length - 1) / 3));
	money /= Math.pow(1000, findNumber);
	money = Math.round(money * 10) / 10;
	return money + abrevation[findNumber];
}