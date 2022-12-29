var image = document.getElementById("emerald_papyrus")
var audio = document.getElementById("bonetrousle")

window.onload = function () {
    image.addEventListener("click", go);
}

function go() {
          
          const div = document.getElementById("papyrus-gigachad");
          const papyrus = document.getElementById("emerald_papyrus");

          audio.muted = false;
          audio.play();
          audio.currentTime = 0;
          audio.volume = 0.5;

          setTimeout(() => {
            party1()
          }, 4500);

          setTimeout(() => {
            party2();
          }, 8000);

          setTimeout(() => {
            halucynki1();
            party3();
          }, 16000);

          setTimeout(() => {
            halucynki2();
            party4();
          }, 24000);

          setTimeout(() => {
            halucynki1();
            party3();
          }, 50000);

          setTimeout(() => {
            halucynki2();
            party4();
          }, 58200);

          setTimeout(() => {
            halucynki1()
            party3();
          }, 66000);
          
          setTimeout(() => {
            animationNone();
            audio.muted = true;
          }, 81500);


          function party1() {
            papyrus.style.animation = "party 3s linear infinite";
          }

          function party2() {
            papyrus.style.animation = "party 1.5s linear infinite";
          }

          function party3() {
            papyrus.style.animation = "party 0.5s linear infinite";
          }

          function party4() {
            papyrus.style.animation = "party 0.2s linear infinite";
          }

          function halucynki1() {
            div.style.animation = "halucynki 0.3s linear infinite";
          }

          function halucynki2() {
            div.style.animation = "halucynki 0.1s linear infinite";
          }

          function animationNone() {
            div.style.animation = "none";
            papyrus.style.animation = "none";
          }
}
