import throttle from 'lodash.throttle';
import Player from '@vimeo/player'; 

const player = new Player('vimeo-player');

player.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000) );
if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time") )
}