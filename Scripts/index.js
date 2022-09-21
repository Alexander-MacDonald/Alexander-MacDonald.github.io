window.onload = (event) => {

    var width = window.innerWidth;

    if (width < 800) {
        window.location.href = "index-mobile.html";
    }
}

window.onresize = (event) => {
    var width = window.innerWidth;

    if (width < 800) {
        window.location.href = "index-mobile.html";
    }
}