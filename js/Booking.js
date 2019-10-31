'Use Strict';

var movieD = document.getElementById('Movie-Details');  /// To show up customer's selection 


newArray = [];   /// To show the user data 


romanticMo = ['ROMANTIC LIST', 'After', 'Downton Abbey', 'Maleficent', 'Aladdin', 'Judy (II)'];
//console.log('romanticMo , romanticMo.length : ', romanticMo, romanticMo.length);

horrorMo = ['HORROR LIST', 'The Exorcist', 'Psycho', 'Halloween', 'The Thing', 'The Fly'];
//console.log('horrorMo , horrorMo.length : ', horrorMo , horrorMo.length);

comedyMo = ['COMEDY LIST', 'Death at a Funeral', 'Step Brothers', 'The Hangover', 'Superbad', 'Project X'];
//console.log('comedyMo , comedyMo.length : ', comedyMo , comedyMo.length);

actionMo = ['ACTION LIST', 'The Equalizer', 'Logan', 'The Avengers', 'Captain Marvel', 'Black Panther'];
//console.log('actionMo , actionMo.length : ', actionMo , actionMo.length);

dramaMo = ['DRAMA LIST', 'Joker', 'Gemini Man', 'The Lion King', 'The Irishman', 'IT 2'];
// console.log('dramaMo , dramaMo.length : ', dramaMo , dramaMo.length);

var maxSeatNum = 10 ;           // Seats limit for sold out 

/***************************** Constructor Function for movies **********************************************/
function MoviesKind(name, moviesSelect,moviesNAME, seatLoc, seatsNum, payMethod) {

    this.name = name;
    this.moviesSelect = moviesSelect;
    this.moviesNAME = moviesNAME;
    this.seatLoc = seatLoc;
    this.seatsNum = seatsNum;
    this.payMethod = payMethod;
    this.seatCounter = 0;

    MoviesKind.moviesList.push(this);
}
MoviesKind.moviesList = [];                 // Empty array for user choice 

//////////// Store the user's data 
function setUserData() {
    var moviesString = JSON.stringify(MoviesKind.moviesList);
    localStorage.setItem('movies', moviesString);
} // Ending of set function 

var movieForm = document.getElementById('formArea-Movies');

function handleSubmit(event) {

    event.preventDefault();
    // get all the values from the form
    var movies = event.target;
    var name = movies.name.value;

    //console.log('name ', name);
    MoviesKind.moviesList.push(name);

    var moviesSelect = movies.moviesSelect.value;
    //console.log('moviesSelect firt select ', moviesSelect);
    MoviesKind.moviesList.push(moviesSelect);

    var moviesNAME = movies.moviesNAME.value;
    MoviesKind.moviesList.push(moviesNAME);

    var seatLoc = movies.seatLoc.value;
    //console.log('seatLoc ', seatLoc);
    MoviesKind.moviesList.push(seatLoc);

    var seatsNum = parseInt(movies.seatsNum.value);
    //console.log('seatsNum ', seatsNum);
    MoviesKind.moviesList.push(seatsNum);

    if (seatsNum >= maxSeatNum)
    {
        alert('Sorry , Tickets Sold Out , Choose Another Movie');
    }else 
    {
        var total = maxSeatNum - seatsNum;
        //console.log('total ', total);

        alert(' Left Tickets For ' + moviesNAME + ' Movie is : ' + total);

    }

    // this.seatCounter = seatsNum;

    var payMethod = movies.payMethod.value;
    //console.log('payMethod ', payMethod);
    MoviesKind.moviesList.push(payMethod);


    new MoviesKind(name, moviesSelect,moviesNAME,seatLoc, seatsNum, payMethod);
    //console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);
    newArray =  MoviesKind.moviesList;
    //console.log(' newArray', newArray[2]);

    localStorage.removeItem('movies');
    setUserData();
    getUserData(moviesNAME);
   
   
}// end of event function

function getRandomProduct() {
    var index = Math.floor(Math.random() * 100);
    //console.log('index', index);
    return index;
  }  // Ending random product function

/***************************** Drop Down list for different kinds of movies  **************************************/

function romanticDRop() {

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list location for romantic 

    for (var i = 0; i < romanticMo.length; i++) {

        var currentProduct = romanticMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = romanticMo[i];


    }
    //console.log(' theOption.value ', theOption.value);

} /// Ending of romanticDRop() function

function horrorDRop() {

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list location for horror 

    for (var i = 0; i < horrorMo.length; i++) {

        var currentProduct = horrorMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = horrorMo[i];
    }
}/// Ending of horrorDRop() function

function comedyDRop() {

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list location for comedy 

    for (var i = 0; i < comedyMo.length; i++) {

        var currentProduct = comedyMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = comedyMo[i];
    }
}/// Ending of comedyDRop() function

function actionDRop() {

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list location for action 

    for (var i = 0; i < actionMo.length; i++) {

        var currentProduct = actionMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = actionMo[i];
    }
}/// Ending of actionDRop() function

function dramaDRop() {

    //Done: Add an <option> tag inside the form's select for each product

    var selectElement = document.getElementById('items');           // drop down list location for drama 

    for (var i = 0; i < dramaMo.length; i++) {

        var currentProduct = dramaMo[i];
        var theOption = document.createElement('option');
        selectElement.appendChild(theOption);
        theOption.textContent = currentProduct;
        theOption.value = dramaMo[i];
    }
}/// Ending of dramaDRop() function 



/***************************** Show up the movies types **********************************************/

var selectElement = document.getElementById('movieType1');

function handleSelect(event) {

    document.getElementById('showorhiddenRomantic').style.display = "inline";  // Show up the text input which already hidden
    event.preventDefault();
    // get all the values from the form
    var movies = event.target;
    //console.log('movies : ', movies);

    var moviesSelect = movies.value;
    //console.log('moviesSelect ', moviesSelect);

    if (moviesSelect === 'romantic') {                  // show up the drop down list for romantic movies 
        romanticDRop();
    } else if (moviesSelect === 'comedy') {             // show up the drop down list for comedy movies 
        comedyDRop();
    } else if (moviesSelect === 'action') {             // show up the drop down list for action movies 
        actionDRop();
    } else if (moviesSelect === 'horror') {             // show up the drop down list for horror movies 
        horrorDRop();
    } else if (moviesSelect === 'drama') {              // show up the drop down list for drama movies 
        dramaDRop();
    } else {
        alert(' Please choose Movies Type ');
    }

}
selectElement.addEventListener('change', handleSelect);


/********************************** User Movie Choice & Seat Counter  **************************************/

////////// Constructor Function for movie name ////////
function MoviesNameSeatNum(name, src, cinemaName, Moviedate) {

    this.name = name;
    this.src = src;
    this.cinemaName = cinemaName;
    this.Moviedate = Moviedate;

    MoviesNameSeatNum.moviesNameSeatList.push(this);
}

MoviesNameSeatNum.moviesNameSeatList = [];

new MoviesNameSeatNum('After', 'moviesNameImg/After.jpg', 'Taj Cinema', ' At 4:00 PM');
new MoviesNameSeatNum('Downton Abbey', 'moviesNameImg/Downton Abbey.jpg', 'Grand Cinema', 'At 4:00 PM');
new MoviesNameSeatNum('Maleficent', 'moviesNameImg/Maleficent.jpg', 'Prime Cinema', 'At 4:00 PM');
new MoviesNameSeatNum('Aladdin', 'moviesNameImg/Aladdin.jpg', 'City Cinema', 'At 8:00 PM');
new MoviesNameSeatNum('Judy (II)', 'moviesNameImg/Judy.jpg', 'Abdali Cinema', 'At 8:00 PM');

new MoviesNameSeatNum('The Exorcist', 'moviesNameImg/The Exorcist.jpg', 'Taj Cinema', ' At 6:00 PM');
new MoviesNameSeatNum('Psycho', 'moviesNameImg/Psycho.jpg', 'Grand Cinema', 'At 6:00 PM');
new MoviesNameSeatNum('Halloween', 'moviesNameImg/Halloween.jpg', 'Prime Cinema', 'At 6:00 PM');
new MoviesNameSeatNum('The Thing', 'moviesNameImg/The Thing.png', 'City Cinema', 'At 10:00 PM');
new MoviesNameSeatNum('The Fly', 'moviesNameImg/The Fly.jpg', 'Abdali Cinema', 'At 10:00 PM');

new MoviesNameSeatNum('Death at a Funeral', 'moviesNameImg/Death at a Funeral.jpg', 'Taj Cinema', ' At 8:00 PM');
new MoviesNameSeatNum('Step Brothers', 'moviesNameImg/Step Brothers.jpg', 'Grand Cinema', 'At 8:00 PM');
new MoviesNameSeatNum('The Hangover', 'moviesNameImg/The Hangover.jpg', 'Prime Cinema', 'At 8:00 PM');
new MoviesNameSeatNum('Superbad', 'moviesNameImg/Superbad.jpg', 'City Cinema', 'At 12:00 AM');
new MoviesNameSeatNum('Project X', 'moviesNameImg/Project X.jpg', 'Abdali Cinema', 'At 12:00 AM');

new MoviesNameSeatNum('The Equalizer', 'moviesNameImg/The Equalizer.jpg', 'Taj Cinema', ' At 10:00 PM');
new MoviesNameSeatNum('Logan', 'moviesNameImg/Logan.jpg', 'City Cinema', 'At 4:00 PM');
new MoviesNameSeatNum('The Avengers', 'moviesNameImg/The Avengers.jpg', 'Grand Cinema', 'At 10:00 PM');
new MoviesNameSeatNum('Captain Marvel', 'moviesNameImg/Captain Marvel.jpg', 'Prime Cinema', 'At 10:00 PM');
new MoviesNameSeatNum('Black Panther', 'moviesNameImg/Black Panther.jpg', 'Abdali Cinema', 'At 4:00 PM');

new MoviesNameSeatNum('Joker', 'moviesNameImg/Joker.jpg', 'Taj Cinema', ' At 12:00 AM');
new MoviesNameSeatNum('Gemini Man', 'moviesNameImg/Gemini Man.jpg', 'Grand Cinema', 'At 12:00 AM');
new MoviesNameSeatNum('The Lion King', 'moviesNameImg/The Lion King.jpg', 'Prime Cinema', 'At 12:00 AM');
new MoviesNameSeatNum('The Irishman', 'moviesNameImg/The Irishman.jpg', 'City Cinema', 'At 6:00 PM');
new MoviesNameSeatNum('IT 2', 'moviesNameImg/IT2.jpg', 'Abdali Cinema', 'At 6:00 PM');


MoviesNameSeatNum.container = document.getElementById('movieImage');    // select the area for output 


MoviesNameSeatNum.middleImage = document.getElementById('movie-image');   // select the image location 
MoviesNameSeatNum.middleTitle = document.getElementById('movie-title');   // select the movie name location 

MoviesNameSeatNum.middleObject = null;


////////////// Add Element /////////////////
function addElement(tag, container, text) {

    var element = document.createElement(tag);      // determine the tag
    container.appendChild(element);                 // append it 
    if (text) {         
        element.textContent = text;                 // set the content 
    }
    return element;

} // Ending Add Element  function 


////////// Store movies names
function setMoviesNames() {
    var productStr = JSON.stringify(MoviesNameSeatNum.moviesNameSeatList);    // convert the data to it in local storage as string
    localStorage.setItem('MoviesName', productStr);  // then store it in LS 
} // Ending Of Updates updateMoviesNames Function


///////////// Call it  ////////////////////
setMoviesNames();

/********************************** Show up the user ticket  **************************************/

function getUserData(moviesNAME) {

    var dataP = localStorage.getItem('MoviesName');   // To get array of movies 
    var ProductData = JSON.parse(dataP);

    var alloutput = document.getElementById('Movie-sentences');  // to print out the needed info 

    var movieNameImg = document.getElementById('movie-image');  // change the pic of movie 
    var movieNameTilte = document.getElementById('movie-title');  // change the title of the movie

    movieNameImg.innerHTML = '';
    if (ProductData) {
        //console.log('Product data Name ', ProductData);

        for (var i = 0; i < ProductData.length; i++) {
            // console.log('Product data Name ', ProductData.length);
            var arrayIndex = ProductData[i];
            //console.log('arrayIndex : ', arrayIndex);
            var newMovie = MoviesNameSeatNum.moviesNameSeatList[i];

            if (arrayIndex.name === moviesNAME) {
                //console.log(' arrayIndex.name',arrayIndex.name );
                movieNameImg.setAttribute('src', arrayIndex.src);
                movieNameTilte.textContent = arrayIndex.name;
                addElement('li', alloutput, 'Your Ticket Number is  : ' + getRandomProduct());
                addElement('li', alloutput, 'Your Name : ' + MoviesKind.moviesList[0])
                addElement('li', alloutput, 'Movie Kind : ' + MoviesKind.moviesList[1])
                addElement('li', alloutput, 'Movie Name : ' + MoviesKind.moviesList[2])
                addElement('li', alloutput, 'Seat Class : ' + MoviesKind.moviesList[3])
                addElement('li', alloutput, 'Number Of Seats : ' + MoviesKind.moviesList[4])
                addElement('li', alloutput, 'Payment Method : ' + MoviesKind.moviesList[5])
                addElement('li', alloutput, 'Cinema Name : ' + newMovie.cinemaName)
                addElement('li', alloutput, 'Time : ' + newMovie.Moviedate)
            }

        }

    } else {

        alert(' Nothing Here ');
    }

} // Ending of function getUserData


/********************************** End Of Code  **************************************/
/********************************** End Of Code  **************************************/
/********************************** End Of Code  **************************************/
/********************************** End Of Code  **************************************/
/********************************** End Of Code  **************************************/



var selectElement = document.getElementById('items');
//console.log(' selectElement', selectElement);

movieForm.addEventListener('submit', handleSubmit);

selectElement.addEventListener('change',
    function (event) {

        event.preventDefault();
        // get all the values from the form
        var movies = event.target;
        //console.log('movies : ', movies);

        var moviesSelect = movies.value;
        //console.log('moviesSelect for movie name ', moviesSelect);

        switch (moviesSelect) {
            case "After":
            case "Downton Abbey":
            case "Maleficent":
            case "Aladdin":
            case "Judy (II)":
                break;

            case "The Exorcist":
            case "Psycho":
            case "Halloween":
            case "The Thing":
            case "The Fly":
                break;

            case "Death at a Funeral":
            case "Step Brothers":
            case "The Hangover":
            case "Superbad":
            case "Project X":
                break;

            case "The Equalizer":
            case "Logan":
            case "The Avengers":
            case "Captain Marvel":
            case "Black Panther":
                break;

            case "Joker":
            case "Gemini Man":
            case "The Lion King":
            case "The Irishman":
            case "IT 2":
                break;
        }
    },
    false
);
