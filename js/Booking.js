'Use Strict';

var movieForm = document.getElementById('formArea-Movies');
var movieD = document.getElementById('Movie-Details');


/////////////////////// Constructor Function for movies  ///////////////
function MoviesKind(name, moviesSelect, seatKind, seatsNum) {

    this.name = name;
    this.moviesSelect = moviesSelect;
    this.seatKind = seatKind;
    this.seatsNum = seatsNum;

    MoviesKind.moviesList.push(this);

}

MoviesKind.moviesList = [];

function updateMovies() {
    var moviesString = JSON.stringify(MoviesKind.moviesList);
    localStorage.setItem('movies', moviesString);
  } // Ending of set function 


  function getProducts() {
    var dataP = localStorage.getItem('movies');
    //console.log(' dataP' , dataP);
    var ProductData = JSON.parse(dataP);
    //console.log('Product data' , ProductData);
  
    if (ProductData) {
      //console.log('ProductData.length' , ProductData.length );
      //console.log(' products length  2 ' , AllProductsCont.all.length  );
  
      for (let i = 0; i < ProductData.length; i++) {
        var rawProductObject = ProductData[i];
        var chgProductCtrs = MoviesKind.moviesList[i];
        
      }
      //console.log(' products length  2 ' , AllProductsCont.all.length  );
  
    //   renderNewProducts();
    }else {
      
      alert(' nothing here ');
      // new AllProductsCont('bag', 'img/bag.jpg');
  
    }
    //console.log('local Storage Data', ProductData);
  } //// Ending Of get Products Function 


function handleSubmit(event) {

    event.preventDefault();
    // get all the values from the form
    var movies = event.target;
    var name = movies.name.value;
    console.log('name ', name);

    var moviesSelect = movies.moviesSelect.value;
    console.log('moviesSelect ', moviesSelect);

    var seatKind = movies.seatKind.value;
    console.log('SeatKind ', seatKind);

    var seatsNum = parseInt(movies.seatsNum.value);
    console.log('seatsNum ', seatsNum);     

    new MoviesKind(name, moviesSelect, seatKind, seatsNum);
    console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);

    updateMovies();

    // Update and render 
  }// end of event function

  movieForm.addEventListener('submit', handleSubmit);
//   console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);
