'use strict'

const firstNum = prompt("введите первое число", "вы не ввели число");
const secondNum = prompt("введите второе число", "вы не ввели число");

if (+firstNum === +secondNum) {
	alert("два числа равны");
} else {
	if (+firstNum > +secondNum) {
		alert("первое больше второго");
	} else {
		alert("второе больше первого");
	}
}
