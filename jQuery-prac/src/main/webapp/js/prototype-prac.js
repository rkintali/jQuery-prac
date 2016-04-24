/**
 * 
 */

function Person(firstName, lastName, age, callBackFn) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.greetMsg = function() {
		return "Hello:" + this.firstName + " " + this.lastName;
	}
	callBackFn(this.firstName, this.lastName);
}

function toRich(firstName, lastName) {
	console.log("Message to VIPs: Mr." + firstName + " " + lastName
			+ "You are so rich. Please be philantrhopic");
}

function toPoor(firstName, lastName) {
	console
			.log("Message to financially disadvantaged: Mr."
					+ firstName
					+ " "
					+ lastName
					+ " Nothing is impossible. Raise up. Stop not - until you achieved it");
}

var guru = new Person("Guru", "Smith", 62, toRich);
// console.log(guru.greetMsg());

var garib = new Person("Aam", "Aadmi", 30, toPoor);

var myObj = new Person("Guru", "Smith", 62, toRich);
myObj.firstName = "Govind";
myObj.lastName = "Brian";
console.log(myObj.greetMsg());

var add = (function() {
	var counter = 0;

	return function() {
		console.log("Add closure:" + counter);
		return counter += 1;

	}
})();
console.log(add());
console.log(add());
console.log(add());

// array methods.
(function() {
	var array = [ "A", "B", "C", "D", "E", "F" ];
	console.log("Array length:" + array.length);
	console.log("Array elements together:" + array);
	console.log("Array elements with a seperator:" + array.join("*"));
	console.log("Last element removed is:" + array.pop());
	array.push("Z")
	console.log("Last element added is:" + (array).join("*"));
	array.reverse();
	console.log("Elements after reverse:" + array);
	array.sort();
	console.log("Elements after sort:" + array);

})();

function Vehicle() {
	this.runMethod = function(options) {
		console.log(options["name"] + ": Mileage " + options["mileage"]);
	}
}

var Vehicle = new Vehicle();

Vehicle.runMethod({
	"name" : "Swift",
	"mileage" : 50
});

var myApplication = function() {
	var name = "guru";
	var age = 60;
	return {
		method1 : function() {
			return "From method1";
		},
		method2 : function() {
			return "From method2";
		}
	}
}();

console.log(myApplication.method1());
console.log(myApplication.method2());


var revealingPattern = function() {
	var name = "guru";
	var age = 60;
	
	function fromMethod1(){
		return "From method1";
	}
	function fromMethod2(){
		return "From method2";
	}
	return {
		method1 : fromMethod1,
		method2 : fromMethod2
	}
}();

console.log(revealingPattern.method1());
console.log(revealingPattern.method2());