window.onresize = (event) => {
    var width = document.documentElement.clientWidth;

    if (width >= 800) {
        window.location.href = "index.html";
    }
}