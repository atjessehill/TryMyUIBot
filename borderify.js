document.body.style.border = "5px solid blue";
var count = parseInt(window.sessionStorage.getItem("countKey"));
var refreshTimer = setTimeout(refresher, 5000);
window.addEventListener("beforeunload", clearvars);

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function refresher(){
	console.log("refresher");
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