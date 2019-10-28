// var contentArea = document.getElementById('content-area');
// var cookietable = document.createElement('table');
// contentArea.appendChild(cookietable);
// ///////////*****////////////


// function HeadRow(table) {

//     var HeadRow = document.createElement('tr');
//     table.appendChild(HeadRow);
//     var Header = document.createElement('th');
//     HeadRow.appendChild(Header);
//     Header.textContent = '   ok  ';
//     var HeadRow = document.createElement('tr');
//     table.appendChild(HeadRow);
//     var Header = document.createElement('th');
//     HeadRow.appendChild(Header);
//     Header.textContent = '   oi  ';
// }
// //     for (var i = 0; i < hours.length; i++) {
// //         var hourS = document.createElement('th');
// //         HeadRow.appendChild(hourS);
// //         hourS.textContent = hours[i];
// //     }
// //     var totallocation = document.createElement('th');
// //     HeadRow.appendChild(totallocation);
// //     totallocation.textContent = 'Daily Location Total';
// // }
// HeadRow(cookietable);
'use strict';
var hours = ['5pm',  '6pm', '7pm','8pm','9pm','10pm','11pm'];


function ShopOfCookies(locationName, name, max, avg) {
    this.locationName = locationName;
    this.min = name;
    this.max = max;
    this.avg = avg;

    this.total = 0;
    this.randomNumber = 0;
    this.cookiesperhour = [];

};
var cookiesperhour = [];

var seattle = new ShopOfCookies('Taj cinema', 'hero', 65, 6.3);
var tokyo = new ShopOfCookies('Grand cinema', 'ok', 24, 1.2);
var dubai = new ShopOfCookies('Prime cinema', 'ii', 38, 3.7);
var paris = new ShopOfCookies('City mall cinema','yy', 38, 2.3);
var lima = new ShopOfCookies('abdali cinema', '2', 16, 4.6);
var locations = [seattle, tokyo, dubai, paris, lima];

ShopOfCookies.prototype.randomInRange = function () {
    var range = this.max - this.min;
    var rand = (Math.random() * range) + this.min;
    var randomNumber = Math.ceil(rand);
    return randomNumber;
};


ShopOfCookies.prototype.numberofcookies = function () {
    for (var i = 0; i < hours.length; i++) {
        var result = this.randomInRange(this.min, this.max);
        var cookiespur = Math.ceil(this.avg * result);
        this.cookiesperhour.push(cookiespur);
        this.total += cookiespur;
    }
}



for (var i = 0; i < locations.length; i++) {
    console.log('totaldata', locations[i]);
    locations[i].numberofcookies();
}



console.log('Seattle', cookiesperhour);


var contentArea = document.getElementById('content-area');
var cookietable = document.createElement('table');
contentArea.appendChild(cookietable);
///////////*****////////////


function hr(table) {

    var HeadRow = document.createElement('tr');
    table.appendChild(HeadRow);
    var Header = document.createElement('th');
    HeadRow.appendChild(Header);
    Header.textContent = '     ';

    for (var i = 0; i < hours.length; i++) {
        var hourS = document.createElement('th');
        HeadRow.appendChild(hourS);
        hourS.textContent = hours[i];
    }
    var totallocation = document.createElement('th');
    HeadRow.appendChild(totallocation);
    // totallocation.textContent = 'Daily Location Total';
}
hr(cookietable);
//////////////////////............///////////////////
// ShopOfCookies.prototype.data = function () {
//     var dataRow = document.createElement('tr');
//     cookietable.appendChild(dataRow);

//     var shoplocationNames = document.createElement('th');
//     dataRow.appendChild(shoplocationNames);
//     shoplocationNames.textContent = this.shoplocation;

//     for (var i = 0; i < this.cookiesperhour.length; i++) {

//         var cookiesperhour = document.createElement('td');
//         dataRow.appendChild(cookiesperhour);
//         cookiesperhour.textContent = this.cookiesperhour[i];
//     }
//     var totalcookies = document.createElement('td');
//     dataRow.appendChild(totalcookies);
//     totalcookies.textContent = this.total;
// };
// for (var i = 0; i < locationsnames.length; i++) {

//     this.locationsnames[i].data();

// }
ShopOfCookies.prototype.renderDataRows = function () {
    var dRow = document.createElement('tr');
    cookietable.appendChild(dRow);

    var locationN = document.createElement('th');
    dRow.appendChild(locationN);
    locationN.textContent = this.locationName;

    for (var i = 0; i < this.cookiesperhour.length; i++) {

        var cookiesperhour = document.createElement('td');
        dRow.appendChild(cookiesperhour);
        cookiesperhour.textContent = this.cookiesperhour[i];
    }
    var totalcookies = document.createElement('td');
    dRow.appendChild(totalcookies);
    totalcookies.textContent = this.total;
};
for (var i = 0; i < locations.length; i++) {

    locations[i].renderDataRows();

}

function footerRows(table) {
    var HeadRow = document.createElement('tr');
    table.appendChild(HeadRow);
    var tHour = document.createElement('td');
    HeadRow.appendChild(tHour);
    tHour.textContent = 'Totals';
    for (var i = 0; i < hours.length; i++) {
        var tHour = document.createElement('td');
        HeadRow.appendChild(tHour);
        // tHour.textContent = seattle.cookiesperhour[i] + tokyo.cookiesperhour[i] + dubai.cookiesperhour[i] + paris.cookiesperhour[i] + lima.cookiesperhour[i];


    }
    // var totaloftotal = document.createElement('td');
    // HeadRow.appendChild(totaloftotal);
    // totaloftotal.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;


}
footerRows(cookietable);


