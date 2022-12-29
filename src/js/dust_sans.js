var image = document.getElementById("dust_sans")
var audio = document.getElementById("dustmusic")

window.onload = function () {
    image.addEventListener("click", go);
}

function go() {

            const element = document.querySelector('body');
            element.setAttribute('id', 'body');

            audio.muted = false;
            audio.play();
            audio.volume = 0.2;
            audio.currentTime = 0;

            setTimeout(() => {
                party1()
                halucynki1()
            }, 16800);

            setTimeout(() => {
                halucynki2();
                party4();
                audio.volume = 1;
            }, 44400);

            setTimeout(() => {
                animationNone();
                audio.muted = true;
            }, 110000);


            function party1() {
                document.getElementById("dust_sans").style.animation = "party 3s linear infinite";
            }

            function party2() {
                document.getElementById("dust_sans").style.animation = "party 0.5s linear infinite";
            }

            function party3() {
                document.getElementById("dust_sans").style.animation = "party 0.3s linear infinite";
            }

            function party4() {
                document.getElementById("dust_sans").style.animation = "party 0.1s linear infinite";
            }

            function halucynki1() {
                document.body.style.animation = "halucynki 1s linear infinite";
            }

            function halucynki2() {
                document.body.style.animation = "halucynki 0.3s linear infinite";
            }

            function halucynki3() {
                document.body.style.animation = "halucynki 0.2s linear infinite";
            }

            function animationNone() {
                document.body.style.animation = "none";
                document.getElementById("dust_sans").style.animation = "none";
                element.removeAttribute('id')
            }
}