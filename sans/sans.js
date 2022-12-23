const image = document.getElementById("sans")
const audio = document.getElementById("megalovania")

window.onload = function () {
    image.addEventListener("click", go);
}

function go() {

            const element = document.querySelector('body');
            element.setAttribute('id', 'body');

            audio.muted = false;
            audio.play();
            audio.volume = 0.5;
            audio.currentTime = 0;

            setTimeout(() => {
                party1()
            }, 16300);

            setTimeout(() => {
                halucynki1();
                party2();
            }, 32000);

            setTimeout(() => {
                halucynki2();
                party3();
            }, 40000);

            setTimeout(() => {
                halucynki3();
                party4();
            }, 48000);

            setTimeout(() => {
                animationNone();
                audio.muted = true;
            }, 80000);


            function party1() {
                document.getElementById("sans").style.animation = "party 3s linear infinite";
            }

            function party2() {
                document.getElementById("sans").style.animation = "party 0.5s linear infinite";
                document.getElementById("sans").src = '../images/ultimate_sans.gif'
                document.getElementById("sans").style.width = "25rem";
            }

            function party3() {
                document.getElementById("sans").style.animation = "party 0.3s linear infinite";
            }

            function party4() {
                document.getElementById("sans").style.animation = "party 0.1s linear infinite";
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
                document.getElementById("sans").style.animation = "none";
                document.body.removeAttribute('id');
                document.getElementById("sans").src = '../images/sans.png'
                document.getElementById("sans").style.width = "30rem";
            }
}