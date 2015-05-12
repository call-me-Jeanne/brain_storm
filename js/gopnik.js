

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

function blender () {
    a= a.reverse(); //пока только разворот, но будем писать и рандомайзер...
}

function warp() {
    var ok = confirm('Нажмите "OK" и продолжим заполнение, "Cancel" - вернемся на главную');
    if (ok)
        zapolnenie();
}

function dell (){
    a.length=0;
    lenght=undefined;
}

function dell_el (){
    var x=prompt("Введите номер элемента подлежащего удалению:","");
    var dell_el= a.splice(x-1,1);
}

function myfunc(){
    var fr = document.getElementById('myframe');
    fr.contentWindow.document.write("<h1 style='text-align: center'>" + a + "</h1>");
    fr.contentWindow.document.close();
    setInterval("myfunc()", 100);
}
