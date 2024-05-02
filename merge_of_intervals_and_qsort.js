function merge(intervals) {
	if (intervals < 2) return intervals;
	intervals.sort((a, b) => a[0] - b[0]);
	let result = [intervals[0]];
	for (let interval of intervals) {
		let current = result[result.length - 1];
		if (current[1] >= interval[0]) {
			current[1] = Math.max(current[1], interval[1]);
		} else result.push(interval);
	}
	return result;
}

function q_sort(a) {
	if (a.length < 2) return a;
	else {
		let main_pos = a[a.length - 1];
		let less = [];
		let greater = [];

		for (let i = 0; i < a.length - 1; i++) {
			if (a[i] <= main_pos) {
				less.push(a[i]);
			} else {
				greater.push(a[i]);
			}
		}
let result=[...q_sort(less), [main_pos], ...q_sort(greater)]
		return result;
	}
}

let arr = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
];
let result = merge(arr);
console.log(result);
let array=[2, 6, 3, 2, 8, 4, 2, 7, 9, 54, 3]
//console.log(q_sort(arr));
