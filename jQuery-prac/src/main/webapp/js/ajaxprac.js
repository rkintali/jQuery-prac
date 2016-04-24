/**
 * 
 */

function reloadContent(){
	console.log("reload event handler");
	var xmlHttpReq = new XMLHttpRequest();
	xmlHttpReq.open("GET", "asyntext.txt", true);
	xmlHttpReq.send();
	xmlHttpReq.onreadystatechange = function(){
		console.log("Ready state:"+xmlHttpReq.readyState);
		//console.log("Status:"+xmlHttpReq.status);
		if(xmlHttpReq.readyState ==4 && xmlHttpReq.status === 200){
			document.getElementById("content").innerHTML = xmlHttpReq.responseText;
			console.log("Response text:"+xmlHttpReq.responseText);
		}
	}
}