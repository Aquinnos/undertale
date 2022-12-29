window.onload = function () {
    document.getElementById("sans").addEventListener("mouseover", hover);
    document.getElementById("sans_flex").addEventListener("mouseout", nonHover);
}

function hover() {
    document.getElementById("sans").style.display = "none";
    document.getElementById("sans2").style.display = "block";
    document.getElementById("papyrus").style.display = "block";
}

function nonHover() {
    document.getElementById("sans").style.display = "block";
    document.getElementById("sans2").style.display = "none";
    document.getElementById("papyrus").style.display = "none";
} 

