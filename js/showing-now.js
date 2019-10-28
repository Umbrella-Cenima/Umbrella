'use strict';
var hours = [  '  6pm  ', '  7pm  ','  8pm','9pm','10pm'];

var contentArea = document.getElementById('content-area');
var cookietable = document.createElement('table');
contentArea.appendChild(cookietable);

function HeadRow(table) {

    var HeadRow = document.createElement('tr');
    table.appendChild(HeadRow);
    var Header = document.createElement('th');
    HeadRow.appendChild(Header);
    Header.textContent = '    ';

    for (var i = 0; i < hours.length; i++) {
        var hourS = document.createElement('th');
        HeadRow.appendChild(hourS);
        hourS.textContent = hours[i];
    }
    var totallocation = document.createElement('th');
    HeadRow.appendChild(totallocation);
    // totallocation.textContent = 'Daily Location Total';
}
HeadRow(cookietable);

var tajs = ['ok','hero','zobmbi','you','people','im ','oko'];

function HeadRo(table) {


    var HeadRo = document.createElement('tr');
    table.appendChild(HeadRo);
    var Header = document.createElement('td');
    HeadRo.appendChild(Header);
    Header.textContent = ' Taj cinema   ';

    for (var i = 0; i < tajs.length; i++) {
        var hourS = document.createElement('td');
        HeadRo.appendChild(hourS);
        hourS.textContent = tajs[i];
    }
    var totallocation = document.createElement('td');
    HeadRo.appendChild(totallocation);
    // totallocation.textContent = 'Daily Location Total';
}
HeadRo(cookietable);
 
var Grands = ['al','so','ty','uu','uup','ft','iik'];

function Head(table) {


    var Head = document.createElement('tr');
    table.appendChild(Head);
    var Header = document.createElement('td');
    Head.appendChild(Header);
    Header.textContent = 'Grand cinema  ';

    for (var i = 0; i < Grands.length; i++) {
        var hourS = document.createElement('td');
        Head.appendChild(hourS);
        hourS.textContent = Grands[i];
    }
    var totallocation = document.createElement('td');
    Head.appendChild(totallocation);
    // totallocation.textContent = 'Daily Location Total';
}
Head(cookietable);
var Primes = ['asdd','soeded','tyeded','uu33','uu3f3fp',];

function HeadP(table) {

    var HeadP = document.createElement('tr');
    table.appendChild(HeadP);
    var Header = document.createElement('td');
    HeadP.appendChild(Header);
    Header.textContent = 'Prime cinema  ';

    for (var i = 0; i < Primes.length; i++) {
        var hourS = document.createElement('td');
        HeadP.appendChild(hourS);
        hourS.textContent = Primes[i];
    }
    var totallocation = document.createElement('td');
    HeadP.appendChild(totallocation);
    // totallocation.textContent = 'Daily Location Total';
}
HeadP(cookietable);

var citys=['ss','ssd','uu','yyy','uup'];

function HeadPi(table) {

    var HeadPi = document.createElement('tr');
    table.appendChild(HeadPi);
    var Header = document.createElement('td');
    HeadPi.appendChild(Header);
    Header.textContent = 'City cinema  ';

    for (var i = 0; i < citys.length; i++) {
        var hourS = document.createElement('td');
        HeadPi.appendChild(hourS);
        hourS.textContent = citys[i];
    }
    var totallocation = document.createElement('td');
    HeadPi.appendChild(totallocation);
    // totallocation.textContent = 'Daily Location Total';
}
HeadPi(cookietable);

var abdali =[' iok ','f','kk','kkoi','ytr'];

function HeadPic(table) {

    var HeadPic = document.createElement('tr');
    table.appendChild(HeadPic);
    var Header = document.createElement('td');
    HeadPic.appendChild(Header);
    Header.textContent = 'Abdali cinema ';

    for (var i = 0; i < abdali.length; i++) {
        var hourS = document.createElement('td');
        HeadPic.appendChild(hourS);
        hourS.textContent = abdali[i];
    }
    var totallocation = document.createElement('td');
    HeadPic.appendChild(totallocation);
    // totallocation.textContent = 'Daily Location Total';
}
HeadPic(cookietable);
