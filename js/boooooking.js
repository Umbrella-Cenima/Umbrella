 
'Use Strict';

var movieForm = document.getElementById('formArea-Movies');
var movieD = document.getElementById('Movie-Details');


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


var moviesNAME ; 

/////////////////////// Constructor Function for movies  ///////////////
function MoviesKind(name, moviesSelect, seatLoc, seatsNum, payMethod) {

    this.name = name;
    this.moviesSelect = moviesSelect;
    this.seatLoc = seatLoc;
    this.seatsNum = seatsNum;
    this.payMethod = payMethod;

    MoviesKind.moviesList.push(this);
}
MoviesKind.moviesList = [];                 // Empty array for user choice 

//////////// Store the user's data 
function setUserData() {
    var moviesString = JSON.stringify(newArray);
    localStorage.setItem('movies', moviesString);
} // Ending of set function 

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

    var moviesNAME = movies.moviesNAME.value;
    newArray.push(moviesNAME);

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



    // updateMovieName();
    setUserData();
    // renderMovie();
    // getMovies();


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

function horrorDRop() {

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

function comedyDRop() {

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

function actionDRop() {

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

function dramaDRop() {

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

        if (moviesSelect === 'romantic') {
            romanticDRop();
        } else if (moviesSelect === 'comedy') {
            comedyDRop();
        } else if (moviesSelect === 'action') {
            actionDRop();
        } else if (moviesSelect === 'horror') {
            horrorDRop();
        } else if (moviesSelect === 'drama') {
            dramaDRop();
        } else {
            alert(' Please choose Movies Type ');
        }

    },
    false
);


////////////////////////////////////// User Movie Choice & Seat Counter  /////////////////////////////////////////////////////////////

////////// Constructor Function for movie name ////////
function MoviesNameSeatNum(name, src,cinemaName,Moviedate) {

    this.name = name;
    this.src = src;
    this.cinemaName = cinemaName;
    this.Moviedate = Moviedate;

    this.seatCounter = 0;

   

    MoviesNameSeatNum.moviesNameSeatList.push(this);
}

MoviesNameSeatNum.moviesNameSeatList = [];

new MoviesNameSeatNum('After', 'moviesNameImg/After.jpg','Taj Cinema',' At 4:00 PM');
new MoviesNameSeatNum('Downton Abbey', 'moviesNameImg/Downton Abbey.jpg','Grand Cinema' , 'At 4:00 PM');
new MoviesNameSeatNum('Maleficent', 'moviesNameImg/Maleficent.jpg','Prime Cinema' , 'At 4:00 PM');
new MoviesNameSeatNum('Aladdin', 'moviesNameImg/Aladdin.jpg','City Cinema' , 'At 8:00 PM');
new MoviesNameSeatNum('Judy (II)', 'moviesNameImg/Judy.jpg','Abdali Cinema' , 'At 8:00 PM');

new MoviesNameSeatNum('The Exorcist', 'moviesNameImg/The Exorcist.jpg','Taj Cinema',' At 6:00 PM');
new MoviesNameSeatNum('Psycho', 'moviesNameImg/Psycho.jpg','Grand Cinema' , 'At 6:00 PM');
new MoviesNameSeatNum('Halloween', 'moviesNameImg/Halloween.jpg','Prime Cinema' , 'At 6:00 PM');
new MoviesNameSeatNum('The Thing', 'moviesNameImg/The Thing.png','City Cinema' , 'At 10:00 PM');
new MoviesNameSeatNum('The Fly', 'moviesNameImg/The Fly.jpg','Abdali Cinema' , 'At 10:00 PM');

new MoviesNameSeatNum('Death at a Funeral', 'moviesNameImg/Death at a Funeral.jpg','Taj Cinema',' At 8:00 PM');
new MoviesNameSeatNum('Step Brothers', 'moviesNameImg/Step Brothers.jpg','Grand Cinema' , 'At 8:00 PM');
new MoviesNameSeatNum('The Hangover', 'moviesNameImg/The Hangover.jpg','Prime Cinema' , 'At 8:00 PM');
new MoviesNameSeatNum('Superbad', 'moviesNameImg/Superbad.jpg','City Cinema' , 'At 12:00 AM');
new MoviesNameSeatNum('Project X', 'moviesNameImg/Project X.jpg','Abdali Cinema' , 'At 12:00 AM');

new MoviesNameSeatNum('The Equalizer', 'moviesNameImg/The Equalizer.jpg','Taj Cinema',' At 10:00 PM');
new MoviesNameSeatNum('Logan', 'moviesNameImg/Logan.jpg','City Cinema' , 'At 4:00 PM');
new MoviesNameSeatNum('The Avengers', 'moviesNameImg/The Avengers.jpg','Grand Cinema' , 'At 10:00 PM');
new MoviesNameSeatNum('Captain Marvel', 'moviesNameImg/Captain Marvel.jpg','Prime Cinema' , 'At 10:00 PM');
new MoviesNameSeatNum('Black Panther', 'moviesNameImg/Black Panther.jpg','Abdali Cinema' , 'At 4:00 PM');

new MoviesNameSeatNum('Joker', 'moviesNameImg/Joker.jpg','Taj Cinema',' At 12:00 AM');
new MoviesNameSeatNum('Gemini Man', 'moviesNameImg/Gemini Man.jpg','Grand Cinema' , 'At 12:00 AM');
new MoviesNameSeatNum('The Lion King', 'moviesNameImg/The Lion King.jpg','Prime Cinema' , 'At 12:00 AM');
new MoviesNameSeatNum('The Irishman', 'moviesNameImg/The Irishman.jpg','City Cinema' , 'At 6:00 PM');
new MoviesNameSeatNum('IT 2', 'moviesNameImg/IT2.jpg','Abdali Cinema' , 'At 6:00 PM');


MoviesNameSeatNum.container = document.getElementById('movieImage');


MoviesNameSeatNum.middleImage = document.getElementById('movie-image');
MoviesNameSeatNum.middleTitle = document.getElementById('movie-title');

MoviesNameSeatNum.middleObject = null;


function updateMovieName(moviesSelect) {


    //console.log(' update movie name ' ,moviesSelect );
    var dataP = localStorage.getItem('MoviesName');
    var ProductData = JSON.parse(dataP);

    var dataPpp = localStorage.getItem('movies');
    var ProductDataaa = JSON.parse(dataPpp);

    var alloutput = document.getElementById('Movie-sentences');

    alloutput.innerHTML = '';

    console.log('newarray : ', newArray);

    for (var i =0;i<ProductData.length;i++)
    {
        // var userData = MoviesKind.moviesList;
        
        var newMovie = MoviesNameSeatNum.moviesNameSeatList[i];
        //console.log('newMovies : ', newMovie);
        if (newMovie.name === moviesSelect )
        {
            addElement('li', alloutput,'Your Name : ' + ProductDataaa[0] )
            addElement('li', alloutput,'Movie Kind : ' + ProductDataaa[1] )
            addElement('li', alloutput,'Movie Name : ' + ProductDataaa[2] )
            addElement('li', alloutput,'Seat Class : ' + ProductDataaa[3] )
            addElement('li', alloutput,'Number Of Seats : ' + ProductDataaa[4] )
            addElement('li', alloutput,'Payment Method : ' + ProductDataaa[5] )
            addElement('li', alloutput,'Cinema Name : ' + newMovie.cinemaName )
            addElement('li', alloutput,'Time : ' + newMovie.Moviedate )


        }
       
       
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


function getMovies(moviesSelect) {

    var dataP = localStorage.getItem('MoviesName');
    var ProductData = JSON.parse(dataP);

    var movieNameImg = document.getElementById('movie-image');
    var movieNameTilte = document.getElementById('movie-title');

    movieNameImg.innerHTML = '';

    
    console.log('moviesSelect get ', moviesSelect);

    if (ProductData) {
        // console.log('Product data Name ', ProductData);

        for (var i = 0; i < ProductData.length; i++) {
        // console.log('Product data Name ', ProductData.length);
            var arrayIndex = ProductData[i];

            if (arrayIndex.name === moviesSelect) {
                movieNameImg.setAttribute('src', arrayIndex.src);
                movieNameTilte.textContent = arrayIndex.name;
            }

        }
        // updateMovieName(moviesSelect);
    } else {

        alert(' nothing here ');
    }
    //console.log('local Storage Data', ProductData);
} //// Ending Of get Products Function



/////////////////////////////////////////////////////////////////////////////////////////////////////////

var selectElement = document.getElementById('items');
console.log(' selectElement', selectElement);

selectElement.addEventListener('change',
    function (event) {

        event.preventDefault();
        // get all the values from the form
        var movies = event.target;
        console.log('movies : ', movies);

        var moviesSelect = movies.value;
        console.log('moviesSelect for movie name ', moviesSelect);

        switch (moviesSelect) {
            case "After":
            case "Downton Abbey":
            case "Maleficent":
            case "Aladdin":
            case "Judy (II)":
                // alert('ROMANTIC Movie Name ');
                // renderRomanticMovie(moviesSelect);
                getMovies(moviesSelect);
                updateMovieName(moviesSelect);
                break;

            case "The Exorcist":
            case "Psycho":
            case "Halloween":
            case "The Thing":
            case "The Fly":
                // alert('HORROR Movie Name ');
                getMovies(moviesSelect);
                updateMovieName(moviesSelect);

                break;

            case "Death at a Funeral":
            case "Step Brothers":
            case "The Hangover":
            case "Superbad":
            case "Project X":
                // alert('COMEDY Movie Name ');
                getMovies(moviesSelect);
                updateMovieName(moviesSelect);

                break;

            case "The Equalizer":
            case "Logan":
            case "The Avengers":
            case "Captain Marvel":
            case "Black Panther":
                // alert('ACTION Movie Name ');
                getMovies(moviesSelect);
                updateMovieName(moviesSelect);

                break;

            case "Joker":
            case "Gemini Man":
            case "The Lion King":
            case "The Irishman":
            case "IT 2":
                // alert('DRAMA Movie Name ');
                getMovies(moviesSelect);
                updateMovieName(moviesSelect);

                break;


        }

    },
    false
);


// function renderRomanticMovie(moviesSelect) {

//     var movieNameImg = document.getElementById('movie-image');
//     var movieNameTilte = document.getElementById('movie-title');

//     movieNameImg.innerHTML = '';
//     // for (var i = 0; i < newArray.length; i++) {
//     // var all = newArray[i];

//     for (var i = 0; i < MoviesNameSeatNum.moviesNameSeatList.length; i++)
//     {

//         if (MoviesNameSeatNum.moviesNameSeatList[i].name == moviesSelect)
//         {
//             movieNameImg.setAttribute('src',MoviesNameSeatNum.moviesNameSeatList[i].src);
//             movieNameTilte.textContent = MoviesNameSeatNum.moviesNameSeatList[i].name;
//         }else
//         {
//             alert('Wrong Movie');
//         }

// console.log(' MoviesNameSeatNum.moviesNameSeatList[i].name',MoviesNameSeatNum.moviesNameSeatList[i].name );
//     }


    // var element = document.createElement('p');
    // movieNameImg.appendChild(element);
    // element.textContent = moviesSelect;

    // }
// Ending of renderMovie() function 

