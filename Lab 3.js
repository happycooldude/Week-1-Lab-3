var a = 1;
var b = prompt("Vul hier het eerste getal in waarvan u de tafel wilt weten")
var c = prompt("Vul hier het tweede getal in waarvan u de tafel wilt weten")

for(a = 1; a<=10; a++){
  document.write(a,"X",b,"=" + a*b + "<br>");
}

document.write("<br>");

for(a = 1; a<=10; a++){
  document.write(a,"X",c,"=" + a*c + "<br>");
}

document.write("<br>" , "12+6x10/5-12 =" , 12+6*10/5-12)
