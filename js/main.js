
// Age-------------------------------------

setInterval(function() {
    var now = new Date();
    var bday = new Date(1995, 08, 20);
    var diff = now - bday;
    document.getElementById("age").innerText = (diff/366/3600/24/1000).toString().substring(0, 14).padEnd(14, '0');
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




