document.body.style.border = "5px solid blue";
var count = parseInt(window.sessionStorage.getItem("countKey"));
var refreshTimer = setTimeout(botUI, 10000);
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
	// class that returns the number of occurences of the text that we don't want
	console.log("Text counter");
	
	// ntah is the class which holds the "No available tests match..." text
	var searchtext = document.getElementsByClassName("ntah");
	var occurences = searchtext.length;
	console.log(occurences);
	return occurences;

}

function botUI(){
	console.log("BotUI");
	var occurences = textCounter();
	console.log("textCounter returned");
	console.log(occurences);
	if (occurences >= 2){
		console.log("no tests available waiting to refresh");
		sleep(100000);
		location.reload();
	}else{
		console.log("tests available");
		window.alert("Tests available");
	}
}