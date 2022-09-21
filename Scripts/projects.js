window.onload = (event) => {

	var width = document.documentElement.clientWidth;

	if (width < 1300) {
		window.location.href = "projects-mobile.html";
	}


}

function hideDesc(num) {
	
	var str = "ProjDesc" + num;
	var btnstr = "DescB" + num;
	var desc = document.getElementById(str);
	var btn = document.getElementById(btnstr);
	var btntxt = btn.textContent;
	var btntxt = btntxt.substring(0, btntxt.length-1);
	console.log(btntxt);	
	if (desc.style.display != "block") {
		desc.style.display = "block";
		btn.textContent = btntxt + "▼";
	} 
	else if (desc.style.display != "none"){
		stopVideos();
		desc.style.display = "none";
		btn.textContent = btntxt + "►";
	}
	else {
		desc.style.display = "block";
		btn.textContent = btntxt + "▼";
	}
	
};


function stopVideos() {
    var videos = document.querySelectorAll('iframe, video');
    Array.prototype.forEach.call(videos, function (video) {
        if (video.tagName.toLowerCase() === 'video') {
            video.pause();
        } else {
            var src = video.src;
            video.src = src;
        }
    });
};
