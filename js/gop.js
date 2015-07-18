prikol();

function prikol() {
    var goodAnswer = 'От души, ёпт!';

    //ввод данных пользователем и запись полученного в num
    var num = parseInt(prompt("Введите число от одного до пяти включительно:"));

    //проверка введенных данных на соответствие условиям
    if (num === 1 || num === 2 || num === 3 || num === 4 || num === 5) {

        //переключатель в зависимости от введенных данных
        switch (num) {
            case 1:
                alert(goodAnswer);
                break;
            case 2:
                alert(goodAnswer);
                break;
            case 3:
                alert(goodAnswer);
                break;
            case 4:
                alert(goodAnswer);
                break;
            case 5:
                alert(goodAnswer);
                break;
        }
    }
    else {
        //доебывается
        alert("тупой?");

        //самовызывает функцию-гопника
        prikol();
    }
}
