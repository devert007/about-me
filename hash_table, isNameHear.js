let cache = new Set();

let isNameHear = function () {
	const name = prompt("enter your name");
	if (cache.has(name)) return alert("you already hear");
	else {
		cache.add(name);
		alert("you are added to selection");
	}
};
isNameHear();
isNameHear();
