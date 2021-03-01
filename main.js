setInterval(function() {
    var now = new Date();
    var bday = new Date(1995, 07, 20);
    var diff = now - bday;
    document.getElementById("age").innerText = (diff/365/3600/24/1000).toString().substring(0, 14).padEnd(14, '0');
}, 50)



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-140320135-2');
