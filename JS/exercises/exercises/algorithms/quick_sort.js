let array = [];
for (let item = 0; item < 5; item++) {
	array[item] = Math.round(Math.random() * 100);
}
console.log(array);

let q_sort = function (a) {
	if (a.length < 2) return a;
	let main_value = a[a.length-1];
	let left = [];
	let right = [];
	a.forEach(function (value, index, a) {
		if (index < a.length - 1) {
			if (value <= main_value) {
				left.push(value);
			} else right.push(value);
		}
	});
	return [...q_sort(left), main_value, ...q_sort(right)];
};
console.log(q_sort(array));
