/*
var a = 7;//простейшая математика
var b =7;
document.write(a + "<br>" + b + "<br>" + a*b + "<br>" + (a-b)); //плюсы как разделители
*/

/*
var myName = prompt("Ты кто такой?",""); // в myName записываются введенные пользователем данные
alert("Извини, но давай досвиданья," + myName + "!" );// и они уже испоользуются в процессе вывода инфы на экран
document.write("Да, да, " + myName + ", довай досвиданья...")//симметрично
*/

/*
var x = 15; //определение переменной
x = 10; //переопределение переменной
alert(x); //вывод переопределенной переменной
*/

/*
var x = "global";   // Глобальная переменная
function checkscope() {
    var x = "local";  // Локальная переменная с тем же именем, что и у глобальной
    document.write(x);    // Используется локальная переменная, а не глобальная
}
checkscope(); //вывод локалки
document.write("<br>" + x);           // вывод глобалки
*/

/*
function bla() {
    var a=123;
}
bla(); //описание "именно локали"
document.write(a); //если надо вывести локаль то перед ней надо прописать что это именно локаль
*/

/*
var msg = prompt("Тебя как зовут?",""); //получение данных от пользователя
if (msg == "бля") //проверка на соответствие
{
    alert("не матерись!");// если соответствует - то ответ такой
}
else {
    alert("Привет, " + msg); //если нет, то ответ такой
}
*/

/*
var num = prompt("Введите любое число",""); //получаем данные
if (num > 10) //сравнение
    alert("число " + num + " больше 10"); //если да, то
else
if (num == 10)
    alert("число " + num + " равно 10");
else
if (num < 10)
    alert("число " + num + " меньше 10");
else
    alert(num + " - это не число"); //если не выполняется ниодно из условий - то:
*/

//скрипт-гопник, пока не выполнишь условие - не отъебется...
/*
prikol (); //вызов функции-гопника
function prikol(){ //описание тела функции
    var num = prompt("Введите число от одного до пяти включительно:",""); //ввод данных пользователем и запись полученного в num
    if (num == "1" || num == "2" || num == "3" || num == "4" || num == "5") { //проверка введенных данных на соответствие условиям
        switch (num) { //переключатель в зависимости от введенных данных
            case "1": //кавычки потому что prompt возвращает строку а не число
                alert("Спасибо!"); //если соответствует - отваливает от тебя
                break; //собственно отвал
            case "2":
                alert("Спасибо!");
                break;
            case "3":
                alert("Спасибо!");
                break;
            case "4":
                alert("Спасибо!");
                break;
            case "5":
                alert("Спасибо!");
                break;
        }
    }
    else { //если данные не соответствуют
        alert("тупой?"); //доебывается
        prikol (); //самовызывает функцию-гопника
    }
}
*/

/*
var i=0; //определение переменной
while (i<10) //цикл с условием и пост-проверкой - выполняется до соответствия условиям
{
    i++; //увеличение переменной на один шаг
    document.write(i + " "); //вывод полученного значение переменной
}

*/

/*
function foo(a,b) {//определение переменных - автоматическое
    var c=a*b; //с определяем ручками
    alert(c); //выводим алертом результат
}
foo (2,4); //присваиваем значения переменным в теле
if (c=8) //проверка результата на соответсвие
    document.write("восемь"); //вывод одного из вариантов. можно и нужно такие вещи делать через CASE
*/

/*
function calc(a) //определение функции
{
    if (a>=5) //условия отбора данных
    {
    return a * a; //если соблюдатся - вернуть a*a
    }
    else
        alert("число должно быть больше четырех"); //если нет - возмутиться и вернуть ноль
    return 0;
}
a = prompt("введите число:", ""); //ввод данных пользователем и присвоение полученного - переменной
var x = calc(a); //новая переменная которой присвоено значение вернувшееся от функции
document.write(x); //вывод полученного на страничку
*/

/*
var object={ //создание объекта
    name:"Gomer", //наполнение объекта
    age: 42,
    male: "male",
    height: 172
    };
document.write(object.age + "<br>"); //вывод данных из объекта
object.color=prompt("введите название цвета:", ""); //внешний ввод данных
document.write(object.color);
*/

/*
var obj = {
    name: "lol",
    color: {
        1: "black",
        2: "white",
        a: 0,
        b: 0
    }
}
var str = "name";
document.write(str + ": " + obj.name + "<br>"); //вызов переменной из объекта
document.write(str + ": " + obj[str] + "<br>"); //тоже самое, но имя переменной - строка, к примеру введенная через prompt
*/

/*
var a;
var b;
a=prompt("Введите а:");
b=prompt("Введите b:");
var x =+a; //обход возврата prompt'ом строки. если введенная строка представляет собой число, и ее можно складывать.
var y =+b; // умножать можно и без этой хни
var с = x+y;
document.write(с);
*/

/*
var obj={
    hello: function () { //прописываем функцию, которая из массива будет доставать нам данные и формировать из них анкету
        document.write("Привет, меня зовут " + obj.name + ", и мне " + obj.age + " года."); //формировка анкеты
    }, //в принципе запись odj.name можно заменить на this.name, чтобы работать именно с данными из этого объекта
    name: "Гомер", //собствено данные
    age: 34 //данные
};
 obj.hello(); //вызов метода из тела объекта
*/

/*
var a = ["один", "два", "три", "чепыре"]; //массив с четким содержимым
document.write(a[0] + ", "); //вывод перого элемента массива
document.write(a[1] + ", ");// да-да, нумерация с нуля
document.write(a[2] + ", ");
document.write(a[3] + ".");
document.write(" - исходный массив")
a[0]="1"; //изменение элемента массива
document.write("<br>" + a[0] + " - измененный элемент массива" + "<br>");
a[4]="пязь"; //добавление элемента массива
document.write(a + " - все данные из измененного массива");//вывод данных из всего массива без разделителей
document.write("<br>" + a.length + " - количество элеменов в массиве");//lenght возвращает количество элеменов массива
document.write("<br>" + a[a.length - 1] + " - последний элемент вытащеный без явного указания номера элемента" + "<br>"); //lenght-1 открывает доступ к последнему элементу массива без явного указания номера элемента
     document.write("ниже перечислены все элементы массива перебором по порядку:" + "<br>");

a=[]; //создание нового массива
a[1] = 1; //определение элементов
a[3] = 3;
a[5] = 5;
a[7] = 7;
for (var i=0; i< a.length; i++) //для перебора элементов массива так же можно использовать lenght
{
    if (a[i] != undefined) //проверка определен ли элемент массива
        document.write(a[i] + " - элемент №" + i + "<br>"); //проверка пройдена
    else
        document.write('элемент №' + i + ' не определен!' + '<br>'); //не пройдена
}

a.length = 0; //очистка массива через lenght
document.write("<br>" + "массив очищен" + "<br>");
a.length = 8; //длинна массива равна 8 элементам
document.write("<br>" + "массив увеличен:" + "<br>");
for (var i=0; i< a.length; i++) {
    if (a[i] != undefined) //проверка определен ли элемент массива
        document.write(a[i] + " - элемент №" + i + "<br>"); //проверка пройдена
    else
        document.write('элемент №' + i + ' не определен!' + '<br>'); //не пройдена
}
*/

//скрипт-гопник №2
var a = [];
var lenght;
var aI;
var aB;
function zanul () {
    a[0] = 1;
    a[1] = 2;
    a[2] = 3;
    a[3] = 4;
    a[4] = 5;
    a[5] = 6;
    a[6] = 7;
    a[7] = 8;
    a[8] = 9;
    a[9] = 10;
    lenght=10;
}

function razmer() {
    lenght = prompt("Введите длинну массива (от одного до десяти):", "");
    if (lenght == "1" || lenght == "2" || lenght == "3" || lenght == "4" || lenght == "5" || lenght == "6" || lenght == "7" || lenght == "8" || lenght == "9" || lenght == "10") { //проверка введенных данных на соответствие условиям
            switch (lenght) { //переключатель в зависимости от введенных данных
                case "1": //кавычки потому что prompt возвращает строку а не число
                    lenght = 1;
                    alert("Спасибо!"); //если соответствует - отваливает от тебя
                    break; //собственно отвал
                case "2":
                    lenght = 2;
                    alert("Спасибо!");
                    break;
                case "3":
                    lenght = 3;
                    alert("Спасибо!");
                    break;
                case "4":
                    lenght = 4;
                    alert("Спасибо!");
                    break;
                case "5":
                    lenght = 5;
                    alert("Спасибо!");
                    break;
                case "6":
                    lenght = 6;
                    alert("Спасибо!");
                    break;
                case "7":
                    lenght = 7;
                    alert("Спасибо!");
                    break;
                case "8":
                    lenght = 8;
                    alert("Спасибо!");
                    break;
                case "9":
                    lenght = 9;
                    alert("Спасибо!");
                    break;
                case "10":
                    lenght = 10;
                    alert("Спасибо!");
                    break;
            }
    }
    else {
        alert("Циферками, от 1 до 10!");
        razmer();
    }
    a.length=lenght;
}

function vivod() {
    if (lenght !== undefined) {
        for (var i = 0; i < a.length; i++) //для перебора элементов массива так же можно использовать lenght
        {
            if (a[i] != undefined) //проверка определен ли элемент массива
                alert(a.join(", "));
            else
                alert("Массив не заполнен");
            break;
        }}
        else
        alert("Массив не создан!");
}

function vivod_el() {
    if (lenght !== undefined) {
        var el=prompt("Введите номер элемента для вывода:", "");
        var x=+el-1;
        if (x!=undefined) {
            if (a[x] != undefined)
               alert("Значение элемена № " + (x+1) + " равно " + a[x]);
            else
                alert("Элемент не существует");
        }
        else
        alert("Элемент не определен");
    }
    else
    alert("Массив не создан!");
    }

function zapolnenie () {
    if (lenght !== undefined) {
        var aI = prompt("Введите номер заполняемого элемента:", "");
        if (aI == "1" || aI == "2" || aI == "3" || aI == "4" || aI == "5" || aI == "6" || aI == "7" || aI == "8" || aI == "9" || aI == "10") { //проверка введенных данных на соответствие условиям
            switch (aI) { //переключатель в зависимости от введенных данных
                case "1": //кавычки потому что prompt возвращает строку а не число
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 0;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "ой ячейкой");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
                case "2":
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 1;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "мя ячейками");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
                case "3":
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 2;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "мя ячейками");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
                case "4":
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 3;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "мя ячейками");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
                case "5":
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 4;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "мя ячейками");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
                case "6":
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 5;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "ю ячейками");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
                case "7":
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 6;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "ю ячейками");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
                case "8":
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 7;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "ю ячейками");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
                case "9":
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 8;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "ю ячейками");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
                case "10":
                    aB = prompt("Введите значение элемента №" + aI, "");
                    aI = 9;
                    if (aI >= lenght) {
                        alert("Размер массива ограничен " + lenght + "ю ячейками");
                        break;
                    }
                    else
                        a[aI] = aB;
                    warp();
                    break;
            }
        }
    }
    else
        alert("Массив не создан!");
}

function warp() {
    var ok = confirm('Нажмите "OK" и продолжим заполнение, "Cancel" - вернемся на главную')
    if (ok)
        zapolnenie();
}

function dell (){
    a.length=0;
    lenght=undefined;
}

function dell_el ()
{
    var x=prompt("Введите номер элемента подлежащего удалению:","");
    var dell_el= a.splice(x-1,1);
}

/*
function otlov(){
    var onmessage = function(e) {
        var data = e.data;
        var origin = e.origin;

        if (origin == "http://localhost") {
            alert('Запрос пришел с другого домена');
            return;
        }

        var str = 'Пришли неверные данные';

        if (data.title && data.value) {
            str = 'Сообщение:' + data.title + '. Значение объекта:' + data.value;
        }
        document.getElementById('message').innerHTML = str;
    };
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('message', onmessage, false);
    } else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent('onmessage', onmessage);
    }
}*/

