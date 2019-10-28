'use strict';
var hours = [ '  4pm  ', '  6pm  ','  8pm  ','  10pm ',' 12pm'];

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

var tajs = ['After' ,'The Exorcist' , 'Death at a Funeral' , 'The Equalizer' , 'Joker'];

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
 
var Grands = [ 'Downton Abbey' , 'Psycho'  , 'Step Brothers', 'The Avengers','Gemini Man'];

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
var Primes = ['Maleficent'  ,'Halloween'  ,'The Hangover' , 'Captain Marvel' , 'The Lion King'];

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

var citys=['Logan', 'The Irishman' , 'Aladdin' , 'The Thing' , 'Superbad'];

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

var abdali =['Black Panther' , 'It Chapter Two',' Judy (II)', 'The Fly' ,' Project X'];

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
