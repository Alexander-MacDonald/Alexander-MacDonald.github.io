window.onload = (event) => {
    mobileOrDesktop();
};

onresize = (event) => {
    mobileOrDesktop();
};


mobileOrDesktop() {
    var width = window.innerWidth;

    if (width < 600) {
        window.location.href = "index-mobile.html";
    }

};