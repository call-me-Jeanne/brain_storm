var a,b,c;
var i=0;
function schetchik (){
    i++;
}
function butt1 () {
    if (i=1){
        a=1;
        i=1;
        myfunc();
        }
    else
        if (i=2) {
            a=11;
            myfunc();
            }
    else
        if (i=3){
            a=111;
            myfunc();
            }
    else
        a=0;
        myfunc();
}
function myfunc(){
    var fr = document.getElementById('myframe');
    fr.contentWindow.document.write("<h1 style='text-align: center'>" + a + "</h1>");
    fr.contentWindow.document.close();
    setInterval("myfunc()", 10000);
}