import Player  from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe'); 
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";


player.on('timeupdate',throttle(thisCurrentTime,1000))

function thisCurrentTime(data){
    localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds))
}
if(localStorage.getItem(CURRENT_TIME)){
    player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)))

    
}


















