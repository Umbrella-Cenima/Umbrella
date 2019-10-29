'Use Strict';

var movieForm = document.getElementById('formArea-Movies');
var movieD = document.getElementById('Movie-Details');

var seatCounter = 0;
newArray = [];   /// To show the user data 

romanticMo = ['After','Downton Abbey','Maleficent','Aladdin','Judy (II)'];
console.log('romanticMo , romanticMo.length : ', romanticMo , romanticMo.length);

horrorMo = ['The Exorcist','Psycho','Halloween','The Thing','The Fly'];
//console.log('horrorMo , horrorMo.length : ', horrorMo , horrorMo.length);

comedyMo = ['Death at a Funeral','Step Brothers','The Hangover','Superbad','Project X'];
//console.log('comedyMo , comedyMo.length : ', comedyMo , comedyMo.length);

actionMo = ['The Equalizer','Logan','The Avengers','Captain Marvel','Black Panther'];
//console.log('actionMo , actionMo.length : ', actionMo , actionMo.length);

dramaMo = ['Joker','Gemini Man','The Lion King','The Irishman','IT 2'];
// console.log('dramaMo , dramaMo.length : ', dramaMo , dramaMo.length);


/////////////////////// Constructor Function for movies  ///////////////
function MoviesKind(name, moviesSelect, seatLoc, seatsNum ,payMethod) {

    this.name = name;
    this.moviesSelect = moviesSelect;
    this.seatLoc = seatLoc;
    this.seatsNum = seatsNum;
    this.payMethod = payMethod;
    this.timeDate = '';

    MoviesKind.moviesList.push(this);
}
MoviesKind.moviesList = [];                 // Empty array for user choice 

new MoviesKind('', 'After', '', 0 , ' at 6pm ' );


//////////// Store the user's data 
function updateMovies() {
    var moviesString = JSON.stringify(MoviesKind.moviesList);
    localStorage.setItem('movies', moviesString);
} // Ending of set function 


////////// Retrieve the user data from local storage 
function getMovies() {
    var dataP = localStorage.getItem('movies');
    console.log(' dataP', dataP);
    var ProductData = JSON.parse(dataP);
    console.log('Product data', ProductData);

    if (ProductData) {
        console.log('ProductData.length', ProductData.length);
        //console.log(' products length  2 ' , AllProductsCont.all.length  );
        //   for (let i = 0; i < ProductData.length; i++) {
        var rawProductObject = ProductData.name;
        console.log('ProductData.name : ', ProductData.name);
        // var chgProductCtrs = MoviesKind.moviesList[i];
        //console.log(' products length  2 ' , AllProductsCont.all.length  );

        renderMovie();
    } else {

        alert(' nothing here ');
        // new AllProductsCont('bag', 'img/bag.jpg');

    }
    //console.log('local Storage Data', ProductData);
} //// Ending Of get Products Function 

function renderMovie() {

    movieD.innerHTML = '';
    // for (var i = 0; i < newArray.length; i++) {
    // var all = newArray[i];
    var element = document.createElement('p');
    movieD.appendChild(element);
    element.textContent = " Welcome Mr " + newArray[0] + 'You Chosen A ' + newArray[1]+ ' Movie Kind With Seat Type' + newArray[2] + ' And The Number Of Seats is ' + newArray[3];
    
    // }
}

function handleSubmit(event) {

    event.preventDefault();
    // get all the values from the form
    var movies = event.target;
    var name = movies.name.value;

    console.log('name ', name);
    newArray.push(name);

    var moviesSelect = movies.moviesSelect.value;
    console.log('moviesSelect ', moviesSelect);
    if (moviesSelect === "romantic")
    {
        alert('romantic');
        romanticDRop();

    }else if (moviesSelect === "horror")
    {
        alert('horror');

    }else if (moviesSelect === "comedy")
    {
        alert('comedy');

    }else if (moviesSelect === "action")
    {
        alert('action');

    }else if (moviesSelect === "drama")
    {
        alert('drama');
    }else {

        alert('Please Choose Movie Type');
    }
    newArray.push(moviesSelect);

    var seatLoc = movies.seatLoc.value;
    console.log('seatLoc ', seatLoc);
    newArray.push(seatLoc);

    var seatsNum = parseInt(movies.seatsNum.value);
    console.log('seatsNum ', seatsNum);
    newArray.push(seatsNum);

    var payMethod = movies.payMethod.value;
    console.log('payMethod ', payMethod);
    newArray.push(payMethod);

    new MoviesKind(name, moviesSelect, seatLoc, seatsNum , payMethod);
    console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);
    console.log(' newArray', newArray);

    // Update and render 

    updateMovies();
    renderMovie();
    getMovies();


}// end of event function

movieForm.addEventListener('submit', handleSubmit);
//   console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);


/////////// Drop Down list //////////////
function romanticDRop() {

    //Done: Add an <option> tag inside the form's select for each product
    var selectElement = document.getElementById('items');           // drop down list 

    for (var i =0;i<romanticMo.length;i++) {
  
      var currentProduct = romanticMo[i];
      var theOption = document.createElement('option');
      selectElement.appendChild(theOption);
      theOption.textContent = currentProduct;
      theOption.value = romanticMo[i];
    }
  
  }