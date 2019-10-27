'Use Strict';


//////////////////////////////////// Vedios Slideshow ///////////////////////////////////////////////////
var video = document.getElementById('video');
var links = document.getElementsByClassName('links_title');
var trailerTitle = document.getElementById('movieName');
var source_mp4 = document.createElement('source');
var source_ogg = document.createElement('source');
var sound = true;
var movies_mp4 = [
                    "videos/Video & Mp3 Music Downloader Disney 39;s Aladdin Official Trailer   In Theaters May 24 .mp4",
                    "videos/Video & Mp3 Music Downloader IT 2 Final Trailer 2019.mp4",
                    "videos/Video & Mp3 Music Downloader Joker Teaser Trailer 1 2019  Movieclips Trailers.mp4",
                    "videos/Video & Mp3 Music Downloader The Lion King Trailer 1 2019  Movieclips Trailers.mp4",
                    "videos/Video & Mp3 Music Downloader THE NUN Trailer 2018.mp4",
                    ]
var movies_ogg = [
                    "videos/Video & Mp3 Music Downloader Disney 39;s Aladdin Official Trailer   In Theaters May 24 .ogg",
                    "videos/Video & Mp3 Music Downloader IT 2 Final Trailer 2019.ogg",
                    "videos/Video & Mp3 Music Downloader Joker Teaser Trailer 1 2019  Movieclips Trailers.ogg",
                    "videos/Video & Mp3 Music Downloader The Lion King Trailer 1 2019  Movieclips Trailers.ogg",
                    "videos/Video & Mp3 Music Downloader THE NUN Trailer 2018.ogg",
                    ]
var movie_titles = [
                    "Aladdin",
                    "IT 2",
                    "Joker",
                    "The Lion King",
                    "THE NUN",
                    ]
var video_number = 0;
video.appendChild(source_mp4);
video.appendChild(source_ogg);
source_mp4.setAttribute('src', movies_mp4[video_number]);
source_ogg.setAttribute('src', movies_ogg[video_number]);
video.play();    
var change_video = function change_video(movie_name) {
    
    if (typeof movie_name != "undefined") {
        if (movie_name == "Natures Revenge") {
            video_number = 0;
        }
        else if(movie_name == "Death by Chocolate"){
            video_number = 1;
        }
        else if (movie_name == "In Between Posts") {
            video_number = 2;
        }
        else if (movie_name == "The Diary") {
            video_number = 3;
        }
        else if (movie_name == "Jonty Cobra: Grail") {
            video_number = 4;
        }
        
    }
    else if (video_number == 4) {
        video_number = 0;
    }
    else{
        video_number = video_number + 1;
    }
    source_mp4.setAttribute('src', movies_mp4[video_number]);
    source_ogg.setAttribute('src', movies_ogg[video_number]);
    video.load();
    video.play();
   trailerTitle.innerHTML = movie_titles[video_number].toUpperCase();
}
var toggle_voice = function toggle_voice(state){
    if(state == sound){
        return;
    }
    else {
        if(sound == false){
            video.muted = false;
            sound = true;
        } else {
            video.muted = true;
            sound = false;
        }
    }
}


//////////////////////////////////// Images Slideshow ///////////////////////////////////////////////////


var slideIndex = 0;
showSlides();
function showSlides() {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
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
 setTimeout(showSlides, 4000); // Change image every 2 seconds
}