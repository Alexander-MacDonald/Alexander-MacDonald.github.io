window.onresize = (event) => {

    if (window.matchMedia("(max-width: 800px)").matches) {
        window.location.href = "index.html";
    }
}