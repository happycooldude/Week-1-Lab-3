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

var d = prompt("vul hier een getal die u zelf wilt");
var e = prompt("vul hier een getal die u zelf wilt");
var f = prompt("vul hier een getal die u zelf wilt");

document.write("<br>" , "12","+",d,"x",e,"/",f,"-","12 = " , 12+d*e/f-12);
