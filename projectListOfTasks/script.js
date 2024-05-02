const buttonAdd = document.querySelector(".button");
buttonAdd.addEventListener("click", function (event) {
	let newLi = document.createElement("li");
	if (!getText()) {
		alert("an empty string");
	} else {
		newLi.innerText = `${getText()}`;
    let container = document.querySelector(".list");
		container.appendChild(newLi);
    newLi.addEventListener('click',function(event){
      newLi.style.textDecoration="line-through red 3px";
      newLi.style.backgroundColor=" rgb(12, 82, 12)"
    })
  }
});
function getText() {
	let textArea = document.querySelector(".area");
	const text = textArea.value;
	console.log(typeof text);
	if (text.trim() === "") {
		return false;
	} else return text;
}



