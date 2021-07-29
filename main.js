const img = document.querySelector("#idle");
const jsbutton = document.querySelector('#js');
const javabutton = document.querySelector('#java');
const pybutton = document.querySelector('#py');

let money = 0;
let checkjs = false;
let checkpy = false;

img.addEventListener('click', () => {
	if (checkpy)  {
		money += 4;
	} else if (checkjs) {
		money += 2;
	} else {
		money++;
	}
document.querySelector("#amount").innerText = "You have $"+money;
});

jsbutton.addEventListener('click', () => {
	if (money >= 100 || checkjs) {
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
		img.src = "images/javaemoji.png";
	});