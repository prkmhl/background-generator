// Michal. 09.2018
// Andrei Neagoie course, lesson 110 - Background Generator

// const colorArray = document.querySelectorAll(".color");
const color1 = document.getElementById("color1");
const color2 = document.querySelector("#color2");
const h3 = document.querySelector("h3");
const body = document.getElementsByTagName("body")[0];
const rdmButton = document.querySelector("#rdmButton");
const rdmButtonLight = document.querySelector("#rdmButtonLight");
const range = document.querySelector("#gradientAngle");
const removeColorButton = document.getElementById("removeColor");
const addColorButton = document.getElementById("addColor");
const container1 = document.getElementById("container1");
const copyCSSButton = document.getElementById("copyCSS");

let colorArray = [color1, color2];

const changeColor = () => {
	let colorArrayLength = colorArray.length;
	let temp = `linear-gradient(${range.value}deg, `
	// let twoFirst = 
	for (let i = 0; i < colorArrayLength; i++) {
		temp += `${colorArray[i].value}, `;
	}
	temp = temp.slice(0, -2) + ')';
	body.style.background = temp; // here background is in HEX. The reason is that color from "input" is in HEX.
	let toRGB = body.style.background; // behind the scene, color is converted from HEX to RGB, and variable "toRGB" contains color in RGB.
	h3.textContent = toRGB;
}

const changeColorRemove = () => {
	let temp = body.style.background;
	let nr = temp.lastIndexOf("r") - 2;
	temp = temp.slice(0, nr) + `)`;
	body.style.background = temp;
	h3.textContent = temp;
}

const RGBtoHEX = () => {

}
//
	// 	if (colorArrayLength > 4) {
	// 		body.style.background = `linear-gradient(${range.value}deg, 
	// 		${color1.value}, ${color2.value}, ${color3.value}, ${color4.value}, ${color5.value})`;
	// 		//print
	// 		h3.textContent = `linear-gradient(${range.value}deg, 
	// 		${color1.value}, ${color2.value}, ${color3.value}, ${color4.value}, ${color5.value})`;
	// 	} else if (colorArrayLength > 3) {
	// 		body.style.background = `linear-gradient(${range.value}deg, 
	// 		${color1.value}, ${color2.value}, ${color3.value}, ${color4.value})`;
	// 		//print
	// 		h3.textContent = `linear-gradient(${range.value}deg, 
	// 		${color1.value}, ${color2.value}, ${color3.value}, ${color4.value})`;
	// 	} else if (colorArrayLength > 2) {
	// 		body.style.background = `linear-gradient(${range.value}deg, 
	// 		${color1.value}, ${color2.value}, ${color3.value})`;
	// 		//print
	// 		h3.textContent = `linear-gradient(${range.value}deg, 
	// 		${color1.value}, ${color2.value}, ${color3.value})`;
	// 	} else {
	// 		body.style.background = `linear-gradient(${range.value}deg, 
	// 		${color1.value}, ${color2.value})`;
	// 		//print
	// 		h3.textContent = `linear-gradient(${range.value}deg, 
	// 		${color1.value}, ${color2.value})`;
	// 	}
	// }		
		//"h3.textContent = body.style.background" didn't work correctly in Mozilla.
		//Beside bg color, also other bg properties were printed. 
		//body.style.backgroundColor didn't work. Does not work with gradient?!
		//After changing code, HEX is printed instead of RGB. Looks worse, but functions well.
		//Task: how to print RGB well in Mozilla?  //alternative code is hidden


const changeColorRandomly = () => {  //THIS MUST BE DONE MORE CLEVER - DRY METHOD - DON'T REPEAT YOURSELF!!!
	// let angle = Math.floor(Math.random()*361);
	let colorArrayLength = colorArray.length;
	for (let i = 0; i < colorArrayLength; i++) {
		let possible = "0123456789abcdef";
		let HEXnr = "#";
		for (let j = 0; j < 6; j++) {
			let indexNr = Math.floor(Math.random()*16);
			HEXnr += possible.charAt(indexNr);
		}
		colorArray[i].value = HEXnr;
	}
	changeColor();
}
//
	// const randomOneColor = () => {
	// 	let possible = "0123456789abcdef";
	// 	let HEXnr = "#";
	// 	for (let j = 0; j < 6; j++) {
	// 		let indexNr = Math.floor(Math.random()*16);
	// 		HEXnr += possible.charAt(indexNr);
	// 	}
	// }  // alternative

const changeOneColorRandomlyLight = (nrx) => {  //THIS MUST BE DONE MORE CLEVER - "DRY" METHOD - DON'T REPEAT YOURSELF!!!
	// let angle = Math.floor(Math.random()*361);
		let possible = "89abcdef";
		let HEXnr = "#";
		for (let j = 0; j < 6; j++) {
			let indexNr = Math.floor(Math.random()*8);
			HEXnr += possible.charAt(indexNr);
		}
		nrx.value = HEXnr;
		changeColor();
}

const changeColorRandomlyLight = () => {  //THIS MUST BE DONE MORE CLEVER - "DRY" METHOD - DON'T REPEAT YOURSELF!!!
	// let angle = Math.floor(Math.random()*361);
	let colorArrayLength = colorArray.length;
	for (let i = 0; i < colorArrayLength; i++) {
		let possible = "89abcdef";
		let HEXnr = "#";
		for (let j = 0; j < 6; j++) {
			let indexNr = Math.floor(Math.random()*8);
			HEXnr += possible.charAt(indexNr);
		}
		colorArray[i].value = HEXnr;
	}
	changeColor();
}

// Task 1 and 2.
changeColorRandomlyLight(); //paints first-load-background with HTML input colors and
			   //prints code for first-load-background colors.
			   //To change first-load-bg colors - change input HEX colors in HTML.

// Task 3. random button
rdmButton.addEventListener("click", changeColorRandomly);

rdmButtonLight.addEventListener("click", changeColorRandomlyLight);

	// Task 4. (own) Make first-load-background colors random
	// Only need to change a function to execute - from "changeColor" to "changeColorRandomly".

	// Task 5. (own) Change directions of background.

//---------------------
const addNewColorFunc = () => {
	let colorArrayLength = colorArray.length; // when colorArrayLength was an attribute of addNewColorFunc, "let" keyword didn't work here
	switch (colorArrayLength) {
		case 2:
			addColor3();
			break;
		case 3:
			addColor4();
			break;
		case 4:
			addColor5();
	}
}
//
	// var clickNr = 0;
	// const addNewColorFunc = () => {    //too much code, try DRY!! ok-->
	// 	clickNr++;
	// 	if (clickNr > 2) {
	// 		addColor5(); 
	// 	} else if (clickNr > 1) {
	// 		addColor4();
	// 	} else {
	// 		addColor3();
	// 	}
	// }
const removeColorFunc = () => {
	let colorArrayLength = colorArray.length;
	switch (colorArrayLength) {
		case 3:
			colorArray.pop();
			color3.remove();
			removeColorButton.removeAttribute("class", "removeColorActive");
			removeColorButton.setAttribute("class", "removeColorInactive");
			removeColorButton.disabled = true;
			changeColorRemove();
			break;
		case 4:
			colorArray.pop();
			color4.remove();
			changeColorRemove();
			break;
		case 5:
			colorArray.pop();
			color5.remove();
			addColorButton.removeAttribute("class", "addColorInactive");
			addColorButton.setAttribute("class", "addColorActive");
			addColorButton.disabled = false;
			changeColorRemove();	
	}
}

//
	// const removeColorFunc = () => {    //too much code, try DRY!! ok-->
	// 	console.log("ehhh?");
	// 	let colorArrayLength = colorArray.length;
	// 	console.log(colorArrayLength);
	// 	if (colorArrayLength > 2) {
	// 		colorArray.pop(); 
	// 		console.log(colorArrayLength);
	// 	} else {
	// 		removeColorButton.removeAttribute("class", "removeColorActive");
	// 		removeColorButton.setAttribute("class", "removeColorInactive");
	// 		removeColorButton.disabled = true;;
	// 	}
	// }
	//more ambitious, but does not work:
	// 	if (clickNr > 2) {
	// 		addColor();
	// 		addColorButton.removeAttribute("class", "addColorActive");
	// 		addColorButton.setAttribute("class", "addColorInactive");
	// 		addColorButton.disabled = true;
	// 	} else {
	// 		addColor();
	// 	};
	// }

	// const addColor = () => {    //not a solution, now here DRY is needed
	// 	// debugger;
	// 	let colorArrayLength = colorArray.length;
	// 	for (let i = 2; i <= colorArrayLength; i++) {
	// 		colorArray[i] = document.createElement("input");
	// 	}

	// 	// let colorArray = document.querySelectorAll(".color")
	// 	let color = document.createElement("input");
	// 	color.setAttribute("type", "color");
	// 	color.setAttribute("class", "color");
	// 	// color5.setAttribute("id", "color5");
	// 	container1.appendChild(color);
	// 	// changeColorRandomly();
	// 	colorArray.push(color.value);
	// }  //alternative code is hidden, does not work

const addColor5 = () => {    //not a solution, now here DRY is needed
	const color5 = document.createElement("input");
	color5.setAttribute("type", "color");
	color5.setAttribute("class", "color");
	color5.setAttribute("id", "color5");
	container1.appendChild(color5);
	colorArray.push(color5);
	changeOneColorRandomlyLight(color5);
	color5.addEventListener("input", changeColor);
	addColorButton.removeAttribute("class", "addColorActive");
	addColorButton.setAttribute("class", "addColorInactive");
	addColorButton.disabled = true;
	removeColorButton.removeAttribute("class", "removeColorInactive");
	removeColorButton.setAttribute("class", "removeColorActive");
}
const addColor4 = () => {
	const color4 = document.createElement("input");
	color4.setAttribute("type", "color");
	color4.setAttribute("class", "color");
	color4.setAttribute("id", "color4");
	container1.appendChild(color4);
	colorArray.push(color4);
	changeOneColorRandomlyLight(color4);
	color4.addEventListener("input", changeColor);
	removeColorButton.removeAttribute("class", "removeColorInactive");
	removeColorButton.setAttribute("class", "removeColorActive");
}
const addColor3 = () => {
	const color3 = document.createElement("input");
	color3.setAttribute("type", "color");
	color3.setAttribute("class", "color");
	color3.setAttribute("id", "color3");
	container1.appendChild(color3);
	colorArray.push(color3);
	changeOneColorRandomlyLight(color3);
	color3.addEventListener("input", changeColor);
	removeColorButton.removeAttribute("class", "removeColorInactive");
	removeColorButton.setAttribute("class", "removeColorActive");
	removeColorButton.disabled = false;
}

colorArray.forEach(function(elem) {
	elem.addEventListener("input", changeColor);
})

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const copyCSSFunc = () => {
	console.log(h3.innerHTML);

	// document.exexCommand("copy");
}

range.addEventListener("input", changeColor);

addColorButton.addEventListener("click", addNewColorFunc);

removeColorButton.addEventListener("click", removeColorFunc);

copyCSSButton.addEventListener("click", copyCSSFunc);
