'use strict'

function printDate() {
	let dater = new Date();
	console.log(
		"Сегодня " +
			dater.getDate() +
			obj_m[dater.getMonth()] + " " +
			(dater.getYear()+1900) + " " +
			obj_n[dater.getDay()] +
			", " +
			print_h(dater)
	);
}
function print_h(dater) {
	let result_h;
	let result_m;
	let result_s;
	let hours = {
		first: " час",
		second: " часа",
		third: " часов",
	};
	const minutes = {
		first: " минута",
		second: " минуты",
		third: " минут",
	};
	const seconds = {
		first: " секунда",
		second: " секунды",
		third: " секунд",
	};
	if (dater.getHours() % 10) {
		result_h = hours.first;
	} else {
		if (dater.getHours() % 10 < 5 && dater.getHours() % 10 > 0) {
			result_h = hours.second;
		} else {
			result_h = hours.third;
		}
	}
	if (dater.getMinutes() % 10) {
		result_m = minutes.first;
	} else {
		if (dater.getMinutes() % 10 < 5 && dater.getMinutes() % 10 > 0) {
			result_m = minutes.second;
		} else {
			result_m = minutes.third;
		}
	}
	if (dater.getSeconds() % 10) {
		result_s = seconds.first;
	} else {
		if (dater.getSeconds() % 10 < 5 && dater.getSeconds() % 10 > 0) {
			result_s = seconds.second;
		} else {
			result_s = seconds.third;
		}
	}
	let result =
		dater.getHours() +
		result_h + " " +
		dater.getMinutes() +
		result_m + " " +
		dater.getSeconds() +
		result_s;
	return result;
}
let obj_m = {
	0: " января",
	1: " февраля",
	2: " марта",
	3: " апреля",
	4: " мая",
	5: " июня",
	6: " июля",
	7: " августа",
	8: " сентября",
	9: " октября",
	10: " ноября",
	11: " декабря",
};
let obj_n = {
	0: " воскресенье",
	1: " понедельник ",
	2: " вторник ",
	3: " среда ",
	4: " четверг",
	5: " пятница",
	6: " суббота",
};
setInterval(printDate,1000)