const add=document.querySelector('#add');
add.addEventListener('click',function(event){
	
	let new_item=document.createElement('div')
	let container=document.querySelector('.items')
	container.style.cssText='  margin-top:20px; box-shadow: 5px 5px 3px black; background-color: rgb(90, 89, 89); border-radius: 50px; width: 470px;height: 136px;';
	container.appendChild(new_item);console.log(new_item);
})