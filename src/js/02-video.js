import Player from '@vimeo/player';
import _ from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime

if (localStorage.getItem("videoplayer-current-time")) {
  currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

  player.setCurrentTime(currentTime.seconds)
    .then(function () {})
    .catch(function (error) {
    console.log(error)
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
}

player.on('timeupdate', _(function(data) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}, 1000));
