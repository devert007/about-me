"use strict";
function errorType() {
	try {
	} catch (error) {
		alert("a type of your element is different");
	}
}
function FilterType(argument) {
	let arr = [];

	console.log(input);
	for (let i = 0; i < argument.length; i++) {
		if (typeof argument[i] === typeof argument[0]) {
			arr.push(argument[i]);
		} else {
			console.log(argument[i]);
			throw new Error("something went wrong");
		}
	}
	return arr;
}
let input = [10, 30, 40, 50];

console.log(FilterType(input));
