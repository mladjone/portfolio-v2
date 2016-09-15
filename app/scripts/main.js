var line = ["Hi, I’m Mladjone, an enthusiastic and self-motivated front end web developer from Stara Pazova.", "I enjoy working on design-driven projects and combining the art of design with the art of programming.", "With every line of code, I strive to make the web a beautiful place!"];
var whereTo = document.getElementById("pointHere");
var i = 0;
var k = 0;
var br = 0;
var nizText = "";
var timer = setInterval(writeText, 50);

function writeText(){
	if (i < line[br].length){
		displayText();
	}else{
		removeText();
	}
}

function displayText(){
	nizText = nizText + line[br][i];
	i++;
	whereTo.innerHTML = nizText;
	if (i === line[br].length){
		clearInterval(timer);
		setTimeout(function(){timer = setInterval(writeText, 50)}, 1500);
	}
}
function removeText(){	
	nizText = nizText.substring(0, nizText.length - 1);
	whereTo.innerHTML = nizText;
	if (nizText.length === 0){
		i = 0;
		if (br === line.length-1){
			br = 0;
		}else{
			br++;
		}
	}
}
