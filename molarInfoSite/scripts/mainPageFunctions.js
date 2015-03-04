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


function selectedOption(selection) {
  var options = getElementsByClassName("options");


}