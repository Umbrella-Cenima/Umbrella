'Use Strict';


var newarray = [];
var rowData1;
var rowData2;
var sum = 0;
/////////////////////// Constructor Function for movies  ///////////////
function Locations(nameoflocation, min, max, avgCookieSale) {

    this.name = nameoflocation;
    this.maxCust = max;
    this.minCust = min;
    this.avgCookieSale = avgCookieSale;
    this.totalCookies = 0;
    this.genArray = [];  // cookies number per hour 

}

var shopF = document.getElementById('formArea-cookies');

shopF.addEventListener('submit', function (event) {


    event.preventDefault();
    var nameofloc = event.target.nameofloc.value;
    console.log('name ', nameofloc);
    var maxCust = parseInt(event.target.maxCust.value);
    console.log('max ', maxCust);
    var minCust = parseInt(event.target.minCust.value);
    console.log('min ', minCust);
    var avgCookieSale = parseFloat(event.target.avgCookieSale.value);
    console.log('avg ', avgCookieSale);

    var newLoc = new Locations(nameofloc, minCust, maxCust, avgCookieSale);
        newLoc.cookiesValues();         // calculate the cookies for the new object 
        console.log(newLoc);
        addshop (newLoc);
        newarray.push(nameofloc);
        console.log('new locaaaaation' , newarray.length);

        // if (newarray==newarray.length)
        // {

        // var newLoc1 = new Locations(nameofloc, minCust, maxCust, avgCookieSale);
        // newLoc1.cookiesValues();         // calculate the cookies for the new object 
        // console.log(newLoc1);
        // addshop2 (newLoc1);
        // }

        
   
}); // end of event function 