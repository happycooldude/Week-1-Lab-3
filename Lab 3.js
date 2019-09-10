var a = 1;
var b = prompt("Vul hier het eerste getal in waarvan u de tafel wilt weten");
var c = prompt("Vul hier het tweede getal in waarvan u de tafel wilt weten");

for(a = 1; a<=10; a++){
  document.write(a,"X",b,"=" + a*b + "<br>");
}

document.write("<br>");

for(a = 1; a<=10; a++){
  document.write(a,"X",c,"=" + a*c + "<br>");
}

var getal = 12;
var d = prompt("Vul hier een vrijwillig getal in")
var e = prompt("Vul ook hier een vrijwillig getal in")
var f = prompt("En hier")
var g = prompt("Laatste keer")

getal = getal + d;
getal = getal * e;
getal = getal / f;
getal = getal - g;

document.write("<br>",getal);
