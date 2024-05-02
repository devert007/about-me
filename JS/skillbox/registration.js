"use strict";

function User(firstname, lastname) {
	let reg_data = new Date();
	let consumer = {
		firstname: firstname,
		lastname: lastname,
		reg_data2: reg_data,
	};
	this.getFullInfo = function () {
		return consumer;
	};
}
function UserList() {
	let users = [];
	this.add = function (user) {
		if (user !== undefined || user !== null) users.push(user);
		console.log(users);
	};
	this.getAllUsers = function () {
		return users;
	};
}
let list = new UserList();
let flag = true;
while (flag) {
	let input = prompt("enter a name and surname", "ivan kislitsyn");
	if (input === null) flag = false;
	else {
		console.log(input);
		let arr = input.split(" ");
		let first = new User(arr[0], arr[1]);
		list.add(first.getFullInfo());
		console.log(list.getAllUsers());
	}
}
console.log(list.getAllUsers());
