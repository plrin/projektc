// canvasID is the cnavas itself
var canvasID, context;
// mouse positions
var cursorX = 0, cursorY = 0;
// Canvas position, for relative mouse positon
var canvasX = 0, canvasY = 0, canvasW = 800, canvasH = 600;
var playerScore=0, aiScore=0;

// mouse code and initiilization
function OnMouseMove(e){
	cursorX = e.pageX-canvasX;
	cursorY = e.pageY-canvasY;
}

$(document).ready(function(){
	canvasID = document.getElementById("gameCanvas");
	canvasID.addEventListener("mousemove", OnMouseMove, false);
	context = canvasID.getContext('2d');
	var rect = canvasID.getBoundingClientRect();
	canvasX = rect.left; canvasY = rect.top;
	canvasW = rect.right-canvasX; canvasH = rect.bottom-canvasY;
})