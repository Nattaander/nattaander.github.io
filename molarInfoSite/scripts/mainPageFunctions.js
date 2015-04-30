/******************************************************/
// AJAX FUNCTIONS
/******************************************************/


function writeStatus(msg, div) { //writes content into the chosen div
  document.getElementById(div).innerHTML = msg;
}

function ajaxReq(textDoc, div) {
  var xmlhttp;

  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      writeStatus(xmlhttp.responseText, div);
    } else {
      writeStatus("<img src='scripts/images/ajax-loader.gif' style='width:auto; height:3vw' />", div);
    }
  }
  xmlhttp.open("GET", textDoc, true);
  xmlhttp.send();
}

/******************************************************/



var direction = "up",
  patientIcon = document.getElementById("patientOp"),
  clinicIcon = document.getElementById("clinicOp"),
  titleBar = document.getElementById("jumbotitle");

function selectedOption(selection, clickedSelf) {
  switch (direction) {
    case "up":
      titleBar.className = "jumbotron jumboHeadReverse";
      document.getElementById(selection).className = "optionsHidden";
      document.getElementById("clinicHeader").className = "optionsHeaderHide";
      document.getElementById("patientHeader").className = "optionsHeaderHide";

      jss.set('.options:hover', {
        'width': '250px'
      });

      jss.set('.options', {
        'width': '220px'
      });

      jss.set('#selectionBox', {
        '-webkit-animation': 'introSelection 1s',
        'animation': 'introSelection 1s',
        'opacity': '1',
        'display': 'block'
      });

      jss.set('.selectionOptions', {
        '-webkit-animation': 'selectionOptions 1s',
        'animation': 'selectionOptions 1s',
        'opacity': '1',
        'width': '220px'
      });

      document.getElementById(clickedSelf).src = String(document.getElementById(clickedSelf).src).replace('.png', 'Back.png');
      direction = "down";
      break;

    case "down":
      titleBar.className = "jumbotron jumboHead";
      document.getElementById(selection).className = "options";
      document.getElementById("clinicHeader").className = "optionsHeader";
      document.getElementById("patientHeader").className = "optionsHeader";

      jss.set('.options:hover', {
        'width': '350px'
      });

      jss.set('.options', {
        'width': '320px'
      });

      jss.set('#selectionBox', {
        '-webkit-animation': 'introSelectionRev 1s',
        'animation': 'introSelectionRev 1s',
        'opacity': '0',
        'display': 'none'
      });

      jss.set('.selectionOptions', {
        '-webkit-animation': 'selectionOptionsRev 1s',
        'animation': 'selectionOptionsRev 1s',
        'opacity': '0',
        'width': '220px'
      });

      document.getElementById(clickedSelf).src = String(document.getElementById(clickedSelf).src).replace('Back.png', '.png');
      direction = "up";
      break;
  }
}