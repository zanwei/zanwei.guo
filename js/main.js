
// Age-------------------------------------

function isLeapYear(year) {
  return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
}

setInterval(function() {
  var now = new Date();
  var bday = new Date(1995, 07, 20);

  var lastBday = null

  if (now.getMonth() >= bday.getMonth() && now.getDate() >= bday.getDate()) {
    lastBday = new Date(now.getFullYear(), bday.getMonth(), bday.getDate());
  } else {
    lastBday = new Date(now.getFullYear() - 1, bday.getMonth(), bday.getDate());
  }

  var fullYears = lastBday.getFullYear() - bday.getFullYear();
  var diff = now - lastBday;

  var maxLen = 14;

  var ageStr = (fullYears + diff/365/3600/24/1000).toString().substring(0, maxLen);

  if (!ageStr.includes(".")) {
    ageStr += ".";
  }
  
  document.getElementById("age").innerText = ageStr.padEnd(maxLen, '0');
}, 50)


// Google Track-------------------------------------

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-140320135-2');

// img-------------------------------------

window.onload = () => {
    var elements = document.getElementsByTagName("a")
    for (var i = 0; i < elements.length; i++){
        elements[i].addEventListener("mouseover", mouseOver);
        elements[i].addEventListener("mouseout", mouseOut);
    }
}

function mouseOver(e) {
	switch(e.srcElement.id){
    	case "location-1": {
        	document.getElementById("taiyuan").style.display = "block";
            break;
        }
        case "location-2": {
        	document.getElementById("shanghai").style.display = "block";
            break;
        }
    }
}

function mouseOut(e) {
	switch(e.srcElement.id){
    	case "location-1": {
			document.getElementById("taiyuan").style.display = "none";
            break;
        }
        case "location-2": {
        	document.getElementById("shanghai").style.display = "none";
            break;
        }
    }
}




