window.onload = function () {
    document.getElementById("but3").addEventListener("click", search_sans);
    document.getElementById("but4").addEventListener("click", search_papyrus);
}

function search_papyrus() {
    let search = document.getElementById("search_papyrus").value;

    search.toLowerCase();
    search.replace(/\s/g, ''); //usuwa wszystkie białe znaki ze stringa

    if(search.toLowerCase() == "papyrus") {
        location.href = './papyrus/papyrus.html';
    } 
}

function search_sans() {
    let search = document.getElementById("search_sans").value;

    search.toLowerCase();
    search.replace(/\s/g, '');

    if(search == "sans") {
        location.href = './sans/sans.html';
    } else if(search == "dust sans") {
        location.href = './dust-sans/dust_sans.html';
    }
}