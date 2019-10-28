'Use Strict';

var data = document.getElementById('moviesdata');
function MoviesTypes (gender , age , moviekind ){

this.gender = gender;
this.age = age;
this.moviekind = moviekind;

MoviesTypes.popular.push(this);
}
MoviesTypes.popular = [];


function handleSubmit(event) {
    event.preventDefault();
    // get all the values from the form
    var movies = event.target;

    var gender = movies.gender.value;
    console.log('gender ', gender);
  
    var age = movies.age.value;
    console.log('age ', age);

    var moviekind = movies.moviekind.value;
    console.log('moviekind ', moviekind);


    new MoviesTypes(gender, age, moviekind);
    console.log('MoviesTypes.popular : ', MoviesTypes.popular);
    // Update and render

    if (moviekind === "romantic")
    {
        romantic();
    }
    else if (moviekind === "horror")
    {
        horror();
    }
    else if (moviekind === "comedy")
    {
        comedy();
    }
    else if (moviekind === "action")
    {
        action();
    }
    else if (moviekind === "drama")
    {
        drama();
    }
    else  
    {
        alert ('Please Select Movie Type ');
    }
  }
  data.addEventListener('submit', handleSubmit);




function romantic(){

var ctx = document.getElementById('Chart1').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [' After', 'Downton Abbey', 'Maleficent ', 'Aladdin (I) ', 'Judy (II) '],
        datasets: [{
            label: 'Most Popular',
            data: [33242, 19501, 13524, 25256, 22745, 17456],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

romanticRender();
}



function horror(){

var ctx = document.getElementById('Chart1').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['The Exorcist', 'Psycho ', 'Halloween', 'The Thing', 'The Fly'],
        datasets: [{
            label: 'Most Popaler',
            data: [23542, 24519, 33021, 15254, 12252, 17454],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}


function comedy() {
    

var ctx = document.getElementById('Chart1').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Death at a Funeral', 'Step Brothers ', 'The Hangover', 'Superbad', 'Project X'],
        datasets: [{
            label: 'Most Popaler',
            data: [12012, 19013, 13025, 15255, 12012, 22010],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}


function action() {
    
var ctx = document.getElementById('Chart1').getContext('2d');
var myChart4 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['The Equalizer ', 'Logan', 'The Avengers ', 'Captain Marvel', 'Black Panther'],
        datasets: [{
            label: 'Most Popaler',
            data: [12122, 19015, 12423, 5545, 18542, 19543],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}




function drama() {
    
var ctx = document.getElementById('Chart1').getContext('2d');
var myChart5 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [' Joker', 'Gemini Man', 'The Lion King ', 'The Irishman', 'It Chapter Two'],
        datasets: [{
            label: 'Most Popaler',
            data: [12000, 11964, 9035, 8457, 10012],
    
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
///////////////////////////////////////////////////////////////////
//to show images

// var romanticArray = ['imageschart/ca.jpg'];

// function romanticRender()
// {
//     var showRomantic = document.getElementById('moviesPic');

//     showRomantic.innerHTML = ' ';

//     var element = document.createElement('section');
//     showRomantic.appendChild(element);
//     element.textContent = ('imageschart/ca.jpg' , 'imageschart/ca.jpg');

// }

var slideIndex = 0;
showSlidesR();
function showSlidesR() {
 var i;
 var slides = document.getElementsByClassName("mySlidesR");
 var dots = document.getElementsByClassName("dotR");
 for (i = 0; i < slides.length; i++) {
     
   slides[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}
 for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
 setTimeout(showSlidesR, 2000); // Change image every 2 seconds
}



var slideIndex = 0;
showSlidesH();
function showSlidesH() {
 var i;
 var slides = document.getElementsByClassName("mySlidesH");
 var dots = document.getElementsByClassName("dotH");
 for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}
 for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
 setTimeout(showSlidesH, 4000); // Change image every 2 seconds
}



var slideIndex = 0;
showSlidesC();
function showSlidesC() {
 var i;
 var slides = document.getElementsByClassName("mySlidesC");
 var dots = document.getElementsByClassName("dotC");
 for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}
 for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
 setTimeout(showSlidesC, 4000); // Change image every 2 seconds
}




var slideIndex = 0;
showSlidesA();
function showSlidesA() {
 var i;
 var slides = document.getElementsByClassName("mySlidesA");
 var dots = document.getElementsByClassName("dotA");
 for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}
 for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
 setTimeout(showSlidesA, 4000); // Change image every 2 seconds
}





var slideIndex = 0;
showSlidesD();
function showSlidesD() {
 var i;
 var slides = document.getElementsByClassName("mySlidesD");
 var dots = document.getElementsByClassName("dotD");
 for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}
 for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
 setTimeout(showSlidesD, 4000); // Change image every 2 seconds
}