window.onload = function () {
    document.getElementById("but3").addEventListener("click", search_sans);
    document.getElementById("but4").addEventListener("click", search_sans);
}

function search_papyrus() {
    let search = document.getElementById("search_papyrus").value;

    if(search.toLowerCase() == "papyrus") {
        location.href = './papyrus/papyrus.html';
    }
    else {
        alert("no we wpisz papyrus");
    }
}

function search_sans() {
    let search = document.getElementById("search_sans").value;

    if(search.toLowerCase() == "sans") {
        location.href = './sans/sans.html';
    }
    else {
        alert("no we wpisz sans");
    }
}