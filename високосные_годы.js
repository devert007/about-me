let i = prompt("введите первое значение года", "1900");
let j = prompt("введите значение значение года", "1900");
if (i < j) {
	while (i <= j) {
		i % 4 == 0 ? console.log(i++) : i++;
	}
} else {
	while (j <= i) {
		j % 4 == 0 ? console.log(j++) : j++;
	}
}
