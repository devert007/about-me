(function () {
	let random_number = Math.round(Math.random() * 10);
	window.start = function () {
		console.log(random_number);
		let input = parseInt(prompt("enter your number", "number"));

		if (input === random_number) {
			alert("you win!");
      
      
		} else {
			if (input < random_number) {
				alert("less!");
			} else {
				alert("bigger!");
			}
		}
	};
})();
