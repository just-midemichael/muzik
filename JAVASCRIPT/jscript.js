<!--

function menuVis() {
	var menuCont = document.getElementById("menu-cont");
	if (menuCont.style.display == "flex") {
		menuCont.style.display = "none";
		menuCont.style.transform = "translateX(-100%)";
		document.getElementById("body").style.position = "relative";
	}else {
		menuCont.style.display = "flex";
		menuCont.style.transform = "translateX(0)";
		document.getElementById("body").style.position = "fixed";
	}
};

function bgPlay() {
	var bgMs = document.getElementById("bgmusic");
	if (bgMs.style.display == "flex") {
		bgMs.style.display = "none";
		document.getElementById("bgbtn").style.backgroundColor = ""
	}else {
		bgMs.style.display = "flex";
		document.getElementById("bgbtn").style.backgroundColor = "brown"
	}
};


// function pG() {
// 	alert("Are you expecting this website to be functioning?..LOL")
// 	alert("Its Okay, this website is functioning")
// };

// function sW() {
// 	alert("This section is currently unavailable, still working on it. You can play music in -> NOW TRENDING");
// }

//-->