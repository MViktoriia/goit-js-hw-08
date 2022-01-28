import throttle from 'lodash.throttle'
    
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time");

playFromSavedSecond();

player.on('timeupdate', throttle(onTimeUpdate, 1000));



function onTimeUpdate(event) {
     
    localStorage.setItem("videoplayer-current-time", JSON.stringify(event.seconds));
    

};

function playFromSavedSecond() {
    player.setCurrentTime(currentTime).then(function(seconds) {    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
           case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
             break;

           default:
            // some other error occurred
             break;
    }
});
}






