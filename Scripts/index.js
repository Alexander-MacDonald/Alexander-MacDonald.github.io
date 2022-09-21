window.onload = (event) => {

    var width = window.innerWidth;

    if (width < 600) {
        window.location.href = "index-mobile.html";
    }
}

window.onresize = (event) => {
    var width = window.innerWidth;

    if (width < 600) {
        window.location.href = "index-mobile.html";
    }
}