'Use Strict';

var movieForm = document.getElementById('formArea-Movies');
var movieD = document.getElementById('Movie-Details');


newArray = [];   /// To show the user data 

romanticMo = ['ROMANTIC LIST','After', 'Downton Abbey', 'Maleficent', 'Aladdin', 'Judy (II)'];
//console.log('romanticMo , romanticMo.length : ', romanticMo, romanticMo.length);

horrorMo = ['HORROR LIST','The Exorcist', 'Psycho', 'Halloween', 'The Thing', 'The Fly'];
//console.log('horrorMo , horrorMo.length : ', horrorMo , horrorMo.length);

comedyMo = ['COMEDY LIST','Death at a Funeral', 'Step Brothers', 'The Hangover', 'Superbad', 'Project X'];
//console.log('comedyMo , comedyMo.length : ', comedyMo , comedyMo.length);

actionMo = ['ACTION LIST','The Equalizer', 'Logan', 'The Avengers', 'Captain Marvel', 'Black Panther'];
//console.log('actionMo , actionMo.length : ', actionMo , actionMo.length);

dramaMo = ['DRAMA LIST','Joker', 'Gemini Man', 'The Lion King', 'The Irishman', 'IT 2'];
// console.log('dramaMo , dramaMo.length : ', dramaMo , dramaMo.length);


/////////////////////// Constructor Function for movies  ///////////////
function MoviesKind(name, moviesSelect, seatLoc, seatsNum, payMethod) {

    this.name = name;
    this.moviesSelect = moviesSelect;
    this.seatLoc = seatLoc;
    this.seatsNum = seatsNum;
    this.payMethod = payMethod;
    this.timeDate = '';

    MoviesKind.moviesList.push(this);
}
MoviesKind.moviesList = [];                 // Empty array for user choice 

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
    element.textContent = " Welcome Mr " + newArray[0] + 'You Chosen A ' + newArray[1] + ' Movie Kind With Seat Type' + newArray[2] + ' And The Number Of Seats is ' + newArray[3];

    // }
} // Ending of renderMovie() function 

function handleSubmit(event) {

    event.preventDefault();
    // get all the values from the form
    var movies = event.target;
    var name = movies.name.value;

    //console.log('name ', name);
    newArray.push(name);

    var moviesSelect = movies.moviesSelect.value;
    //console.log('moviesSelect ', moviesSelect);

    if (moviesSelect === "romantic") {
        // alert('romantic');
        romanticDRop();                             /// Drop down list for selected type of movies 

    } else if (moviesSelect === "horror") {
        // alert('horror');
        horrorDRop();

    } else if (moviesSelect === "comedy") {
        // alert('comedy');
        comedyDRop();
    } else if (moviesSelect === "action") {
        // alert('action');
        actionDRop();

    } else if (moviesSelect === "drama") {
        // alert('drama');
        dramaDRop();

    } else {

        alert('Please Choose Movie Type');
    }
    newArray.push(moviesSelect);

    var seatLoc = movies.seatLoc.value;
    //console.log('seatLoc ', seatLoc);
    newArray.push(seatLoc);

    var seatsNum = parseInt(movies.seatsNum.value);
    //console.log('seatsNum ', seatsNum);
    newArray.push(seatsNum);

    var payMethod = movies.payMethod.value;
    //console.log('payMethod ', payMethod);
    newArray.push(payMethod);

    new MoviesKind(name, moviesSelect, seatLoc, seatsNum, payMethod);
    //console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);
    console.log(' newArray', newArray);

    // Update and render 

    updateMovies();
    renderMovie();
    getMovies();


}// end of event function

movieForm.addEventListener('submit', handleSubmit);
//   console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);


////////////////////////////////////////////// Drop Down list //////////////////////////////////////////////////////////

function romanticDRop() {

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list 

    for (var i = 0; i < romanticMo.length; i++) {

        var currentProduct = romanticMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = romanticMo[i];

        
    }
    console.log(' theOption.value ', theOption.value);

} /// Ending of romanticDRop() function

function horrorDRop(){

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list 

    for (var i = 0; i < horrorMo.length; i++) {

        var currentProduct = horrorMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = horrorMo[i];
    }
}/// Ending of horrorDRop() function

function comedyDRop(){

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list 

    for (var i = 0; i < comedyMo.length; i++) {

        var currentProduct = comedyMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = comedyMo[i];
    }
}/// Ending of comedyDRop() function

function actionDRop(){

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list 

    for (var i = 0; i < actionMo.length; i++) {

        var currentProduct = actionMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = actionMo[i];
    }
}/// Ending of actionDRop() function

function dramaDRop(){

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list 

    for (var i = 0; i < dramaMo.length; i++) {

        var currentProduct = dramaMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = dramaMo[i];
    }
}/// Ending of dramaDRop() function 



/////// Show up the movies types 
var selectElement = document.getElementById('movieType1'); 

selectElement.addEventListener('change',
    function (event) {

            document.getElementById('showorhiddenRomantic').style.display = "inline";
            event.preventDefault();
            // get all the values from the form
            var movies = event.target;
            console.log('movies : ', movies);

            var moviesSelect = movies.value;
            console.log('moviesSelect ', moviesSelect);

            if (moviesSelect === 'romantic')
            {
                romanticDRop();   
            }else if (moviesSelect === 'comedy')
            {
                comedyDRop();   
            }else if (moviesSelect === 'action')
            {
                actionDRop();   
            }else if (moviesSelect === 'horror')
            {
                horrorDRop();   
            }else if (moviesSelect === 'drama')
            {
                dramaDRop();   
            }else
            {
                alert(' Please choose Movies Type ');
            }
             
    },
    false
);


////////////////////////////////////// User Movie Choice & Seat Counter  /////////////////////////////////////////////////////////////

////////// Constructor Function for movie name ////////
function MoviesNameSeatNum(name,src) {

    this.name = name;
    this.src = src;
    
    this.seatCounter = 0;

    // this.timeDate = '';

    MoviesNameSeatNum.moviesNameSeatList.push(this);
}

MoviesNameSeatNum.moviesNameSeatList = [];

new MoviesNameSeatNum('After','moviesNameImg/After.jpg');
new MoviesNameSeatNum('Downton Abbey','moviesNameImg/Downton Abbey.jpg');
new MoviesNameSeatNum('Maleficent','moviesNameImg/Maleficent.jpg');
new MoviesNameSeatNum('Aladdin','moviesNameImg/Aladdin.jpg');
new MoviesNameSeatNum('Judy (II)','moviesNameImg/Judy.jpg');

new MoviesNameSeatNum('The Exorcist','moviesNameImg/The Exorcist.jpg');
new MoviesNameSeatNum('Psycho','moviesNameImg/Psycho.jpg');
new MoviesNameSeatNum('Halloween','moviesNameImg/Halloween.jpg');
new MoviesNameSeatNum('The Thing','moviesNameImg/The Thing.png');
new MoviesNameSeatNum('The Fly','moviesNameImg/The Fly.jpg');

new MoviesNameSeatNum('Death at a Funeral','moviesNameImg/Death at a Funeral.jpg');
new MoviesNameSeatNum('Step Brothers','moviesNameImg/Step Brothers.jpg');
new MoviesNameSeatNum('The Hangover','moviesNameImg/The Hangover.jpg');
new MoviesNameSeatNum('Superbad','moviesNameImg/Superbad.jpg');
new MoviesNameSeatNum('Project X','moviesNameImg/Project X.jpg');

new MoviesNameSeatNum('The Equalizer','moviesNameImg/The Equalizer.jpg');
new MoviesNameSeatNum('Logan','moviesNameImg/Logan.jpg');
new MoviesNameSeatNum('The Avengers','moviesNameImg/The Avengers.jpg');
new MoviesNameSeatNum('Captain Marvel','moviesNameImg/Captain Marvel.jpg');
new MoviesNameSeatNum('Black Panther','moviesNameImg/Black Panther.jpg');

new MoviesNameSeatNum('Joker','moviesNameImg/Joker.jpg');
new MoviesNameSeatNum('Gemini Man','moviesNameImg/Gemini Man.jpg');
new MoviesNameSeatNum('The Lion King','moviesNameImg/The Lion King.jpg');
new MoviesNameSeatNum('The Irishman','moviesNameImg/The Irishman.jpg');
new MoviesNameSeatNum('IT 2','moviesNameImg/IT2.jpg');


MoviesNameSeatNum.container = document.getElementById('movieImage');


MoviesNameSeatNum.middleImage = document.getElementById('movie-image');
MoviesNameSeatNum.middleTitle = document.getElementById('movie-title');

MoviesNameSeatNum.middleObject = null;

// function renderMovieName()
// {

//     var middleProductImageElement = MoviesNameSeatNum.middleImage;

//     middleProductImageElement.setAttribute('src', MoviesNameSeatNum.middleObject.src);        // Movie Image
//     middleProductImageElement.setAttribute('alt', MoviesNameSeatNum.middleObject.name);

//     MoviesNameSeatNum.middleTitle.textContent = MoviesNameSeatNum.middleObject.name;
// }

function updateMovieName() {

    var alloutput = document.getElementById('Movie-sentences');
  
    alloutput.innerHTML = '';
  
    for (var i = 0; i < MoviesNameSeatNum.moviesNameSeatList.length; i++) {
      var newProduct = MoviesNameSeatNum.moviesNameSeatList[i];
      addElement('p', alloutput, newProduct.name + ' had ' + newProduct.seatCounter + ' votes and was shown ' +  ' times');
    }
  } // Ending Total Updates product function 
  
  
  
  function addElement(tag, container, text) {
  
    var element = document.createElement(tag);
    container.appendChild(element);
    if (text) {
      element.textContent = text;
    }
    return element;
  
  } // Ending Add Element  function 


function setMoviesNames() {
    var productStr = JSON.stringify(MoviesNameSeatNum.moviesNameSeatList);
    localStorage.setItem('MoviesName', productStr);
  } // Ending Of Updates updateMoviesNames Function

  setMoviesNames();


  function getMovies() {
    var dataP = localStorage.getItem('MoviesName');
    //console.log(' dataP' , dataP);
  
    var ProductData = JSON.parse(dataP);
    //console.log('Product data' , ProductData);
  
    if (ProductData) {
      //console.log('ProductData.length' , ProductData.length );
      //console.log(' products length  2 ' , AllProductsCont.all.length  );
  
      for (let i = 0; i < ProductData.length; i++) {
        var rawProductObject = ProductData[i];
        var chgProductCtrs = MoviesNameSeatNum.moviesNameSeatList[i];
        
        chgProductCtrs.seatCounter = rawProductObject.seatCounter;
      }  
    //   renderMovieName();
        }else {
      
      alert(' nothing here ');
    }
    //console.log('local Storage Data', ProductData);
  } //// Ending Of get Products Function



  /////////////////////////////////////////////////////////////////////////////////////////////////////////

var selectElement = document.getElementById('items'); 
console.log(' selectElement',selectElement );

selectElement.addEventListener('change',
    function (event) {

            event.preventDefault();
            // get all the values from the form
            var movies = event.target;
            console.log('movies : ', movies);

            var moviesSelect = movies.value;
            console.log('moviesSelect for movie name ', moviesSelect);

           switch(moviesSelect)
           {
            case "" :
                break;


           }
             
    },
    false
);

romanticMo = ['ROMANTIC LIST','After', 'Downton Abbey', 'Maleficent', 'Aladdin', 'Judy (II)'];
//console.log('romanticMo , romanticMo.length : ', romanticMo, romanticMo.length);

horrorMo = ['HORROR LIST','The Exorcist', 'Psycho', 'Halloween', 'The Thing', 'The Fly'];
//console.log('horrorMo , horrorMo.length : ', horrorMo , horrorMo.length);

comedyMo = ['COMEDY LIST','Death at a Funeral', 'Step Brothers', 'The Hangover', 'Superbad', 'Project X'];
//console.log('comedyMo , comedyMo.length : ', comedyMo , comedyMo.length);

actionMo = ['ACTION LIST','The Equalizer', 'Logan', 'The Avengers', 'Captain Marvel', 'Black Panther'];
//console.log('actionMo , actionMo.length : ', actionMo , actionMo.length);

dramaMo = ['DRAMA LIST','Joker', 'Gemini Man', 'The Lion King', 'The Irishman', 'IT 2'];
// console.log('dramaMo , dramaMo.length : ', dramaMo , dramaMo.length);