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
document.querySelector("#amount").innerText = "You have $"+money;
});

jsbutton.addEventListener('click', () => {
	if (money >= 100 || checkjs) {
		selected = 2;
		jsbutton.innerText = "Unlocked JS";
		img.src = "images/Javascript.png";
		if (!checkjs) {
		money -= 100;
		document.querySelector("#amount").innerText = "You have $"+money;
		checkjs = true;
	}
	}
});

pybutton.addEventListener('click', () => {
	if (money >= 400 || checkpy) {
		selected = 4;
		pybutton.innerText = "Unlocked Python";
		img.src = "images/Python.png";
		if (!checkpy) {
		money -= 400;
		document.querySelector("#amount").innerText = "You have $"+money;
		checkpy = true;
	}
	}
});

javabutton.addEventListener('click', () => { 
		selected = 1;
		img.src = "images/javaemoji.png";
	});

upgradebutton.addEventListener('click', () => { 
	if (money >= upgradecost) {
		money -= upgradecost;
		upgradecost = Math.floor(upgradecost * 1.5);
		selected *= 2;
		document.querySelector("#amount").innerText = "You have $"+money;
		upgradebutton.innerText = "Upgrade Click need $"+upgradecost;
	}
})