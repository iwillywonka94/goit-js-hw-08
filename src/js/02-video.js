import throttle from 'lodash.throttle';
import Player from '@vimeo/player'; 

const player = new Player('vimeo-player');
const data = localStorage.getItem("videoplayer-current-time")

player.on('timeupdate', throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000) );
if (data) {
    player.setCurrentTime(data)
}