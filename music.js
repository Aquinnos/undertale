window.onload = function () {
  document.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.createElement('audio');
    audioElement.src = './overwritecompressed.mp3';
    audioElement.autoplay = true;
    audioElement.volume = 1;
    audioElement.muted = false;
    document.body.appendChild(audioElement);
  });
};
  