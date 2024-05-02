/*Эта задача Hard уровня сложности — такие задают на собеседованиях миддлам и синьорам, поэтому, джуны, в комментах не бояться! 😉

По условиям: у нас на вход подается массив с высотой рельефа.
 Представим себе, что каждая "ячейка" рельефа у нас шириной 1 и высотой той,
  которая задана в конкретном элементе массива. Наша задача посчитать,
   какое количество элементов (юнитов) воды может накопиться в таком рельефе, если пройдет дождь. 

Из дополнительных условий — это то,
 что длина массива может быть от 1 до 10 000,
  а значения элементов в массиве могут быть от 0 до 100 000.*/
  
let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(water(arr));
function water(cub) {
	let count = 0;
	let maxLeft = cub[0];
	let maxRight = cub[cub.length - 1];
	let index = 1;
	let left = 0;
	let right = cub.length - 1;
	while (left < right) {
		if (maxLeft <= maxRight) {
			left++;
			if (cub[left - 1] > cub[left]) {
				maxLeft = Math.max(cub[left - 1], maxLeft);
				count += maxLeft - cub[left];
			}
		} else {
			right--;
			if (cub[right + 1] > cub[right]) {
				maxRight = Math.max(cub[right + 1], maxRight);
				count += maxRight - cub[right];
			}
		}
	}
	return count;
}
