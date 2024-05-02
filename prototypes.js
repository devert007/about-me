'use strict'
 let Transport= {
	cabin :'cabin',
	pilot :'pilot',
   getFullInfo : function () {
		return this.cabin + " " + this.pilot;
	},
}
 let car={
  __proto__:Transport,
  ride:true,
  cabin:'driver',
  pilot:'vanya'
}
console.log(car)
