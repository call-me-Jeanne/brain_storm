var j = 0;
var i = 0;

function schet() {
    var i = 1;
    if (i <= 4) {
        i++;
        j = j + 90;
        rotated();
    }
    else
        j = 0;
    i = 0;
}
function rotated() {
    jQuery("#rotate").rotate(j);
}

function schet1() {
    var i = 1;
    if (i <= 4) {
        i++;
        j = j - 90;
        rotated();
    }
    else
        j = 0;
    i = 0;
}

