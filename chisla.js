let flag = true;
let sum = 0;
while (flag) {
	const message = prompt("enter a number", "1");
	console.log(typeof message);
	if (message === null) {
		flag = false;
	} else {
		sum += +message;
	}
}
alert(sum);
