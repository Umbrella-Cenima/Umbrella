'Use Strict';
var ctx = document.getElementById('Chart').getContext('2d');

// var RomanticArray = [];

// function MoviesTypes (name){
// this.name = name;
// }




// var romantic= new MoviesTypes([' After (2019)', 'Downton Abbey (2019)', 'Maleficent (2014)', 'Aladdin (I) (2019)', 'Judy (II) (2019)']);
// var horror = new MoviesTypes(['The Exorcist (1973)', 'Psycho (1960)', 'Halloween (1978)', 'The Thing (1982)', 'The Fly (1986)']);
// var comedy = new MoviesTypes(['Death at a Funeral', 'Step Brothers ', 'The Hangover', 'Superbad', 'Project X']);
// var action = new MoviesTypes( ['The Equalizer ', 'Logan', 'The Avengers ', 'Captain Marvel', 'Black Panther']);
// var drama = new MoviesTypes([' Joker', 'Gemini Man', 'The Lion King ', 'The Irishman', 'It Chapter Two']);



// var x = document.getElementById("button").value;
// console.log(x);

// x.addEventListener('submit', function (event){
// event.preventDefault();
// var input = event.target.romantic.value;
// });

// function render() {
    

 var chart = new Chart(ctx, {
   type: 'bar',
   data: {
     labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck ',
       'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
     datasets: [
       {
         label: 'Votes',
         backgroundColor: 'white',
         borderColor: 'black',
         data: ( 12 , 14 )
       }
       ,
       {
         label: 'Shown',
         backgroundColor: 'black',
         borderColor: 'white',
         data: (15 , 24 ),
       }
     ],
     options: {}
   }
 });

































// var x = document.getElementById("button");
// x.addEventListener("click", romantic);
// romantic();







// function romantic(){

// var ctx = document.getElementById('myChart1').getContext('2d');
// var myChart1 = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: [' After (2019)', 'Downton Abbey (2019)', 'Maleficent (2014)', 'Aladdin (I) (2019)', 'Judy (II) (2019)'],
//         datasets: [{
//             label: 'Most Popular',
//             data: [33242, 19501, 13524, 25256, 22745, 17456],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });}



// function horror(){

// var ctx = document.getElementById('myChart2').getContext('2d');
// var myChart2 = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['The Exorcist (1973)', 'Psycho (1960)', 'Halloween (1978)', 'The Thing (1982)', 'The Fly (1986)'],
//         datasets: [{
//             label: 'Most Popaler',
//             data: [23542, 24519, 33021, 15254, 12252, 17454],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
// }


// function comedy() {
    

// var ctx = document.getElementById('myChart3').getContext('2d');
// var myChart3 = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Death at a Funeral', 'Step Brothers ', 'The Hangover', 'Superbad', 'Project X'],
//         datasets: [{
//             label: 'Most Popaler',
//             data: [12012, 19013, 13025, 15255, 12012, 22010],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
// }


// function action() {
    
// var ctx = document.getElementById('myChart4').getContext('2d');
// var myChart4 = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['The Equalizer ', 'Logan', 'The Avengers ', 'Captain Marvel', 'Black Panther'],
//         datasets: [{
//             label: 'Most Popaler',
//             data: [12122, 19015, 12423, 5545, 18542, 19543],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
// }




// function drama() {
    
// var ctx = document.getElementById('myChart5').getContext('2d');
// var myChart5 = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: [' Joker', 'Gemini Man', 'The Lion King ', 'The Irishman', 'It Chapter Two'],
//         datasets: [{
//             label: 'Most Popaler',
//             data: [12000, 11964, 9035, 8457, 10012],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
// }



