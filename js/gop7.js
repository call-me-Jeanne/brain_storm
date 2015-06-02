var a=[];
var b=[];
var c=[];

var d, r, e, f, j, h, k;
d=0;
var i=-1;
a.length=i;

function schetchik (){
    i++;
    }

function butt1 () {
    if (d!=0){
        b[i]=1;
        myfunc_1();
    }
    else
    a[i]=1;
    myfunc_1();
}
function butt2 () {
    if (d!=0){
        b[i]=2;
        myfunc_1();
    }
    else
        a[i]=2;
    myfunc_1();
}
function butt3 () {
    if (d!=0){
        b[i]=3;
        myfunc_1();
    }
    else
        a[i]=3;
    myfunc_1();
}
function butt4 () {
    if (d!=0){
        b[i]=4;
        myfunc_1();
    }
    else
        a[i]=4;
    myfunc_1();
}
function butt5 () {
    if (d!=0){
        b[i]=5;
        myfunc_1();
    }
    else
        a[i]=5;
    myfunc_1();
}
function butt6 () {
    if (d!=0){
        b[i]=6;
        myfunc_1();
    }
    else
        a[i]=6;
    myfunc_1();
}
function butt7 () {
    if (d!=0){
        b[i]=7;
        myfunc_1();
    }
    else
        a[i]=7;
    myfunc_1();
}
function butt8 () {
    if (d!=0){
        b[i]=8;
        myfunc_1();
    }
    else
        a[i]=8;
    myfunc_1();
}
function butt9 () {
    if (d!=0){
        b[i]=9;
        myfunc_1();
    }
    else
        a[i]=9;
    myfunc_1();
}
function butt0 () {
    if (d!=0){
        b[i]=0;
        myfunc_1();
    }
    else
        a[i]=0;
    myfunc_1();
}

function butt_plus() {
    c[0]='+';
    i=-1;
    d=1;
    myfunc_1();
}
function ravno(){
    a=+a;
    b=+b;
    alert (a);
    alert (b);
    r=a+b;
    myfunc();
}

function myfunc_1(){
    var fr = document.getElementById('myframe');
    fr.contentWindow.document.write("<h1 style='text-align: center'>" + a.join("") + c + b.join("") + "</h1>");
    fr.contentWindow.document.close();
    setInterval("myfunc()", 100);
}
function myfunc(){
    var fr = document.getElementById('myframe');
    fr.contentWindow.document.write("<h1 style='text-align: center'>" + r + "</h1>");
    fr.contentWindow.document.close();
    setInterval("myfunc()", 100);
}