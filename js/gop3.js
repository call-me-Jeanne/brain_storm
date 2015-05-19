
var i=0;

function schetchik (){
    i++;
    var fr = document.getElementById('myframe');
    fr.contentWindow.document.write("<h1 style='text-align: center'>" + i + "</h1>");
    fr.contentWindow.document.close();
}
var j=0;

function schetchik2 (){
    j++;
    }
function zanul() {

    i=0;
    j=0;
    var elem = document.getElementById("button");
    elem.value = "прямо тут";
    var elem2 = document.getElementById("myframe");
    elem2.contentWindow.document.write("");
    elem2.contentWindow.document.close();
}
function rotate() {
   alert('321');
}