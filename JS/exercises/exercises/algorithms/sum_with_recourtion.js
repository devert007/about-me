//let a=[1,2,3,5,5,7,8];

/*function sum(a){
  if(a==[]) return [];
  if(a.length==1) return a[0];
  return a[0]+sum(a.splice(1,a.length));
}*/

function findLarge(a, large) {

	if (!a.length) return large;
	if (large < a[0]) {
		large = a[0];
		return findLarge(a.splice(1, a.length), large);
	} else {
		return findLarge(a.splice(1, a.length), large);
	}
}

let a = [1, 2, 378,67675, 5, 45, 7, 8666];

//console.log("your sum " + sum(a));
console.log("your largest " + findLarge(a, -1));
