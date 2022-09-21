window.onload = (event) => {

    var width = document.documentElement.clientWidth;

    if (width < 1500) {
        window.location.href = "index-mobile.html";
    }
}