/******************************************************/
// AJAX FUNCTIONS
/******************************************************/

function ajaxReq(textDoc, div) {
	var xmlhttp;

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else {// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function() {
  		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    		writeStatus(xmlhttp.responseText, div);
    	}
    	else  {
    		writeStatus("<img src='images/loading.gif' style='width:auto; height:3vw' />", div);
    	}
	}
	xmlhttp.open("GET",textDoc,true);
	xmlhttp.send();
}

function writeStatus(msg, div) { //writes content into the chosen div
	document.getElementById(div).innerHTML = msg;
}

/******************************************************/

var direction = "up",
    options = document.getElementsByClassName("options"),
    optionsHeaders = document.getElementsByClassName("optionsHeader"),
    titleBar = document.getElementById("jumbotitle");

console.log(options[0].id);

function selectedOption(selection) {
  for (var i=0; i<options.length; i++) {
    if(options[i].id != selection) {
      if(options[i].style.opacity == 1){
        options[i].style.opacity = 0;
        options[i].style.visibility = "hidden";
        console.log(options[i].id + " being made transparent");
      }
      else {
        options[i].style.opacity = 1;
        options[i].style.visibility = "visible";
        console.log(options[i].id + " being made opaque");
      }
    }
  }

  switch(direction) {
    case "up":
    titleBar.className = "jumbotron jumboHeadReverse";
    direction = "down";
    break;

    case "down":
    titleBar.className = "jumbotron jumboHead";
    direction = "up";
    break;
  }
}