document.body.style.border = "5px solid blue";
var count = parseInt(window.sessionStorage.getItem("countKey"));
var refreshTimer = setTimeout(refresher, 5000);
window.addEventListener("beforeunload", clearvars);
var testText = "No available tests match your demographics at this time";


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function textCounter(){
	console.log("Text Counter 3");
	// swap  c-primary... with "ntah"
	var searchtext = document.getElementsByClassName("ntah");
	var occurences = searchtext.length;
	console.log("OCCURENCES: ");
	console.log(occurences);
	if (occurences >= 2){
		console.log("No available tests");
	}else{
		console.log("tests available");
	}

	sleep(3000);


}

function refresher(){
	console.log("refresher");
	textCounter();
	if (isNaN(count)){
		console.log("is null");
		count = 1;
	}
	else{
		console.log("not null");
		count = count + 1;
	}
	window.sessionStorage.setItem("countKey", count);
	console.log(count);
	sleep(4000);
	location.reload();
}