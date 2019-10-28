'use strict';
var hours = ['5pm',  '6pm', '7pm','8pm','9pm','10pm','11pm'];

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
    Header.textContent = ' kk    ';

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

function HeadR(table) {


    var HeadRo = document.createElement('tr');
    table.appendChild(HeadRo);
    var Header = document.createElement('td');
    HeadR.appendChild(Header);
    Header.textContent = 'iii   ';

    for (var i = 0; i < Grands.length; i++) {
        var hourS = document.createElement('td');
        HeadR.appendChild(hourS);
        hourS.textContent = Grands[i];
    }
    var totallocation = document.createElement('td');
    HeadR.appendChild(totallocation);
    // totallocation.textContent = 'Daily Location Total';
}
HeadR(cookietable);
var ahmad = ['asdd','soeded','tyeded','uu33','uu3f3fp','f3f3ft','irfrfik'];
function HeadR(table) {

    var HeadRo = document.createElement('tr');
    table.appendChild(HeadRo);
    var Header = document.createElement('td');
    HeadR.appendChild(Header);
    Header.textContent = 'aaaaa   ';

    for (var i = 0; i < ahmad.length; i++) {
        var hourS = document.createElement('td');
        HeadR.appendChild(hourS);
        hourS.textContent = ahmad[i];
    }
    var totallocation = document.createElement('td');
    HeadR.appendChild(totallocation);
    // totallocation.textContent = 'Daily Location Total';
}
HeadRo(cookietable);