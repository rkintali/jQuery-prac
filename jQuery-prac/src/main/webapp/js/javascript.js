/**
 * 
 */

var myBooks ={};
myBooks.param="param1";
//console.log("This is an object:"+myBooks);


var mango = {
		color: "yellow",
		shape: "round",
		sweet: 8,
		aboutMe: function(){
			console.log("I'm king of all the fruits");
		}
}

//console.log("mango object:"+mango);	
mango.aboutMe();

// object constructor
var apple = new Object();
apple.color="green";
apple.shape="round";
apple.sweet=4;
apple.aboutMe=function(){console.log("I am apple and I am sour")};

apple.aboutMe();
//console.log(apple.sweet);

//constructor pattern
function Fruit(name, color, shape, sweet, aboutMe){
	this.name = name;
	this.color = color;
	this.shape = shape;
	this.sweet = sweet;
	this.aboutMe = aboutMe;
	
}

var appleFruit = new Fruit("apple", "green","round", 8, function(){console.log("I am apple from object pattern")});
console.log(appleFruit.name);
appleFruit.aboutMe();

var mangoFruit = new Fruit("mango", "yellow", "round", 10, function(){console.log("I am the king")});
mangoFruit.aboutMe();

// in and hasOwnProperty properties
console.log("Is name property present: "+ ("name" in appleFruit));
console.log("Is toString an inherited property:"+("toString" in mangoFruit));

console.log("Is name a own property?:"+appleFruit.hasOwnProperty("name"));
console.log("Is toString a own property?:"+appleFruit.hasOwnProperty("toString"));
for(item in mangoFruit){
	console.log("Fruit element:"+item);
}
//convert objet to JSON string
console.log("Stringify js object:"+JSON.stringify(mangoFruit));
JSON.parse(JSON.stringify(mangoFruit));

function Vehicle(){
	
}

Vehicle.type="car";
Vehicle.model="2001";
console.log(Vehicle.type);

