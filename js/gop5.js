var w;
var c;
var g;
var a = [];
var str;
//понять не могу почему первый и последний элемент массива выводится с мусором в виде "???
function zap() {
    w = prompt("Введите данные для записи", "");
    c = prompt("Введите данные для записи", "");
    g = prompt("Введите данные для записи", "");
    a = [w, c, g];
    a = a.join(',');
    localStorage.a = JSON.stringify(a);
    vivod_frame();
}

function vivod_frame() {
    var fr = document.getElementById('myframe');
    fr.contentWindow.document.write("<div><h1>" + localStorage.a + "</h1><div>");
    fr.contentWindow.document.close();
    setInterval("vivod_frame()", 100);
}
function vivod_frame2() {
    var b = document.getElementById('myframe2');
    str = localStorage.a;
    str = str.split(',');
    b.contentWindow.document.write("<div><h1>" + str + "</h1><div>");
    b.contentWindow.document.close();
}
