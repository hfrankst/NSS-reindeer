var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("coloredReindeer");

for (i = 0; i < reindeer.length; i++){
	console.log(colors[i] + " " + reindeer[i]);	
	hohohoElement.innerHTML = hohohoElement.innerHTML + "<br>" + colors[i] + " " + reindeer[i];
}



