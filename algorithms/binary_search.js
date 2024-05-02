"use strict";

function binary_search(a, key) {
  let right = a.length - 1;
  let left = 0;

  while (left <= right) {
    let centre = Math.floor((left + right) / 2);
    let guess = a[centre];

    if (guess == key) return centre;

    if (guess > key) {
      right = centre - 1;
    } else {
      left = centre + 1;
    }
  }

  return "None";
}

let array = [];
for (let i = 0; i < 101; i++) {
  array.push(i);
}

console.log(array);
console.log(binary_search(array,))