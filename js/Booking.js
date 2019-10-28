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

addEventListener('submit', function (event) {


    event.preventDefault();
    var name = event.target.name.value;
    console.log('name ', name);
    var moviesSelect = event.target.moviesSelect.value;
    console.log('moviesSelect ', moviesSelect);
    var seatKind = event.target.seatKind.value;
    console.log('SeatKind ', seatKind);
    var seatsNum = parseInt(event.target.seatsNum.value);
    console.log('seatsNum ', seatsNum);     
   
}); // end of event function 

function handleSubmit(event) {

    event.preventDefault();
    // get all the values from the form
    var movies = event.target;
    var name = movies.name.value;
    var moviesSelect = movies.moviesSelect.value;
    var seatKind = movies.seatKind.value;
    var seatsNum = parseInt(movies.seatsNum.value);
    new MoviesKind(name, moviesSelect, seatKind, seatsNum);
    console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);

    // Update and render 
  }

  movieForm.addEventListener('submit', handleSubmit);
//   console.log('MoviesKind.moviesList : ', MoviesKind.moviesList);
