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

var btnClickEventHandler;
$(document).ready(function () {
	btnClickEventHandler = function (eventObj){
	//console.log("Clicked on button");
	//console.log("event handler args length:"+arguments.length);
	//console.log("Event obj:"+eventObj);
	console.log("Event type:"+eventObj.type);
	console.log("Which mouse key pressed:"+eventObj.which);
	console.log("Source element:"+eventObj.srcElement);
	var srcObj =eventObj.target || eventObj.srcElement;
	
	console.log(srcObj.value);
	srcObj.returnValue = false;
	//eventObj.preventDefault();
	console.log(eventObj.originalProperties);
	console.log(eventObj.currentTarget);
	console.log(eventObj.data);
	console.log( event.isDefaultPrevented());
}
});

function btnMouseOverEvent(eventObj){
	var x = eventObj.clientX;
	var y = eventObj.clientY;
	
	//var button = document.getElementById("btnID");
	//button.style.position="absolute";
	//button.style.left = x +"px";
	//button.style.top= y+"px";
	//console.log("X:"+button.style.left+" Y:"+button.style.top);
	
}
function callBackFn(){
	console.log("Invoked callback method");
	console.log("args:"+arguments.length);
	
}

function callbackCaller(method){
	console.log("Before calling callback method");
	method("abc","def");
}

callbackCaller(callBackFn);



function eventCall(event){
	console.log("Event:"+event);
}

(function(){eventCall(event);})();


$(document).ready(function () {
    $("button").click(function (event) {
        //event.preventDefault();
        //alert("Default prevented: " + event.isDefaultPrevented());
    });
});