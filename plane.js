const input1 = ["08:00", "10:00", "12:00", "18:00"]; //04:00
const input2 = ["08:35", "11:43", "12:56", "16:05"]; //1)3 hours and 8m 2)3 hours and 9m

let time1 = function (f, s) {
	const h1 = f.split(":").slice(0, 1) * 60;
	const h2 = s.split(":").slice(0, 1) * 60;
	const m1 = f.split(":").splice(1, 1);
	const m2 = s.split(":").splice(1, 1);
	const time_first = parseInt(h1) + parseInt(m1);
	const time_second = parseInt(h2) + parseInt(m2);
	return [time_first, time_second];
};
let time2 = function (f, s) {
	const h1 = f.split(":").slice(0, 1) * 60;
	const h2 = s.split(":").slice(0, 1) * 60;
	const m1 = f.split(":").splice(1, 1);
	const m2 = s.split(":").splice(1, 1);

	const time_third = parseInt(h1) + parseInt(m1);
	const time_fourth = parseInt(h2) + parseInt(m2);
	return [time_third, time_fourth];
};

console.log(time1(input2[0], input2[1]));
console.log(time2(input2[2], input2[3]));
console.log(
	calc(...time1(input1[0], input1[1]), ...time2(input1[2], input1[3]))
);
function calc(t1, t2, t3, t4) {
	/*   input1   
  t1+polet-razniza=t2
  t3 +polet+razniza=t4
  =>
  razniza=(t4-t2-t3+t2)/2;
  */
	console.log(t1, t2, t3, t4);
	const razniza = (t4 - t2 - t3 + t1) / 2;
	console.log(razniza);
	const polet = t2 - t1 + razniza;
	console.log(polet);
	let hours = "" + Math.round(polet / 60);
	console.log(hours);
	let minutes = "" + Math.floor(polet % 60);
	console.log(minutes);
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) minutes = "0" + minutes;
	let result = hours + ":" + minutes;
	return result;
}
