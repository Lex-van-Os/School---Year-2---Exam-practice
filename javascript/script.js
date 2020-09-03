function begin(){
    var vandaag = new Date();
    var uren = vandaag.getHours();
    var minuten = vandaag.getMinutes();
    var seconden = vandaag.getSeconds();

    uren = checktijd(uren);
    minuten = checktijd(minuten);
    seconden = checktijd(seconden);
    document.getElementById('timer').innerHTML =
        uren + ":" + minuten + ":" + seconden;
    var tijd = setTimeout(begin, 500);

}
function checktijd(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
