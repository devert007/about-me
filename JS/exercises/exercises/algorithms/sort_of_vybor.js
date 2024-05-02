/*let a = [89, 356, 255, 78];
console.log(sort(a));

function sort(array) {
  let new_Arr = [];
  for (let i = 0; i < array.length; i++) {
    const smallest = find(array);
    new_Arr.push(array.splice(smallest, 1)[0]);
  }
  return new_Arr;
}

function find(array) {
  let smallest = array[0];
  let smallest_index = 0;
  array.forEach(function(item, index, array) {
    if (item < smallest) {
      smallest = item;
      smallest_index = index;
    }
  });
  return smallest_index;
}*/

////////////////////////MINE/////O(n^2)//////////////////
let selection_sort = function (a) {
	1, 2, 5, 3, 6;
	let arr = [];
	for (let i = 0; i < a.length-1; i++) {
		let min_index = i;
		for (let j = i + 1; j < a.length; j++) {
			if (a[j] < a[min_index]) {
				min_index = j;
			}
		}
		if (min_index !== i) {
			let temp = a[i];
			a[i] = a[min_index];
			a[min_index] = temp;
		}
	}

	return a;
};
let a = [1, 4, 2, 5, 3];
console.log(selection_sort(a));
