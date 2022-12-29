const triggerElement = document.getElementById('main');
const audioElement = document.getElementById('audio');
      
triggerElement.addEventListener('mouseenter', function() {
    audioElement.play();
    audioElement.loop;
});