var image = document.getElementById("papyrus")
var audio = document.getElementById("bonetrousle")

window.onload = function () {
    image.addEventListener("click", go);
}

function go() {

          const element = document.querySelector('body');
          element.setAttribute('id', 'body');

          audio.muted = false;
          audio.play();
          audio.currentTime = 0;
          audio.volume = 0.5;

          setTimeout(() => {
            party1()
          }, 6900);

          setTimeout(() => {
            party2();
          }, 19500);

          setTimeout(() => {
            halucynki1();
            party3();
          }, 32300);

          setTimeout(() => {
            halucynki2();
            party4();
          }, 45000);

          setTimeout(() => {
            party1();
            document.body.style.animation = "none";
          }, 51500);

          setTimeout(() => {
            document.getElementById("papyrus").style.animation = "none";
            audio.muted = true;
          }, 58000);


          function party1() {
            document.getElementById("papyrus").style.animation = "party 3s linear infinite";
          }

          function party2() {
            document.getElementById("papyrus").style.animation = "party 1.5s linear infinite";
          }

          function party3() {
            document.getElementById("papyrus").style.animation = "party 0.5s linear infinite";
          }

          function party4() {
            document.getElementById("papyrus").style.animation = "party 0.2s linear infinite";
          }

          function halucynki1() {
            document.body.style.animation = "halucynki 0.3s linear infinite";
          }

          function halucynki2() {
            document.body.style.animation = "halucynki 0.1s linear infinite";
          }

          function animationNone() {
            document.body.style.animation = "none";
            document.getElementById("papyrus").style.animation = "none";
          }
}


          