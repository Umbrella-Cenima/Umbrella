'use strict';
var hours = [ '  4 pm  ', '  6 pm  ','  8 pm  ','  10 pm ',' 12 pm'];
var tajs = ['After' ,'The Exorcist' , 'Death at a Funeral' , 'The Equalizer' , 'Joker'];
var Grands = [ 'Downton Abbey' , 'Psycho'  , 'Step Brothers', 'The Avengers','Gemini Man'];
var Primes = ['Maleficent'  ,'Halloween'  ,'The Hangover' , 'Captain Marvel' , 'The Lion King'];
var citys=['Logan', 'The Irishman' , 'Aladdin' , 'The Thing' , 'Superbad'];
var abdali =['Black Panther' , 'It Chapter Two',' Judy (II)', 'The Fly' ,' Project X'];

var contentArea = document.getElementById('content-area');
var umbrella = document.createElement('table');
contentArea.appendChild(umbrella);

function HeadRow(table) {

    var HeadRow = document.createElement('tr');
    table.appendChild(HeadRow);
    var Header = document.createElement('th');
    HeadRow.appendChild(Header);
    Header.textContent = ' cinema/hours   ';

    for (var i = 0; i < hours.length; i++) {
        var hourS = document.createElement('th');
        HeadRow.appendChild(hourS);
        hourS.textContent = hours[i];
    }
    
}
HeadRow(umbrella);

///////////////////////2//////////////////////

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
    
}
HeadRo(umbrella);
 
////////////////////////////// 3 ////////////////////////////

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
}
Head(umbrella);
//////////////////////////// 4///////////////////////////////////

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
    
}
HeadP(umbrella);

//////////////////////////5/////////////////////////

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
    
}
HeadPi(umbrella);

///////////////////////////// 6 ////////////////////////////

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
}
HeadPic(umbrella);
////////////////// 
