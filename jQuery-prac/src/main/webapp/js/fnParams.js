/**
 * 
 */

function methodA() {
	console.log(arguments.length);
	console.log(arguments[0]);
}
function methodA(element1) {
	console.log("Method A with one param:" + element1);
	console.log("Arguments received:" + arguments.length);
}

methodA("A", "B", "C");
// methodA("0th element");

(function(param1, param2){
	console.log("Param 1:"+ param1+" Param 2:"+param2);
})(1,2);


(function varArgs(...args){
	console.log("Arguments received:"+args.length);
})();

function btnClickEventHandler(e){
	console.log("Clicked on button");
	console.log("event handler args length:"+arguments.length);
	console.log("Event obj:"+e);
}