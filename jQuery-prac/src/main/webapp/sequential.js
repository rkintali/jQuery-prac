/**
 * 
 */

function myfunction() {
    longfunctionfirst();
    shortfunctionsecond();
}

function longfunctionfirst() {
    var j = 10000;
    for (var i=0; i<j; i++) {
        document.body.innerHTML += "  "+i;
    }
    alert("first function finished");
}

function shortfunctionsecond() {
    var j = 10;
    for (var i=0; i<j; i++) {
        document.body.innerHTML += i;
    }
    alert("second function finished");
}