{
	oldDate = 0;
}

//if first load, note that, and allow for submission, if not, deny and set olddate for last press
window.onload = (event) => {
	if(localStorage.getItem('lastUse') === null) {
		logTime();
		localStorage.setItem('f', btoa('it works'));
	}
	oldDate = new Date(atob(localStorage.getItem('lastUse')));
};

//log last time button was successfull used
function logTime() {
	var d = new Date();
	localStorage.setItem('lastUse', btoa(String(d)));	
};

//security check for submission (basic spam protection)
function validation() {
	var d = new Date();
	var oldd = new Date(oldDate.getTime()+(5*60000));
	
	if((atob(localStorage.getItem('f')) === 'it works') || (d > oldd)) {
		localStorage.setItem('f',btoa('it doesnt'));
		logTime();
		return true;
	}
	else {
		return false;
	}
};