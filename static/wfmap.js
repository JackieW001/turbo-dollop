var data = wfdata

var pic = document.getElementById("us-map");
var usa = pic.getElementById("outlines");
var states = usa.getElementsByTagName("path");
var stateDisplay = document.getElementById("stateDisplay");
var homeDisplay = document.getElementById("homeDisplay");
var homeButt = document.getElementById("returnHome");

var colorState = function(a){
    
    var i;
    var state1;
    var state2;
    var McDensity;
    var McColor;
    /*for(i = 0; i < 50; i++){
      state1 = states[1];
      var(j = 0; j < 50; j++){
      state2 = data[j];
      if(state1.id == state2["State"]){
      McDensity = parseFloat(state2["McDonald's Per 100,000"]);
      McDensity *= 10;
      state1.style.fill = "hsl(208, 100%, " + McDensity  + "%)";
      }
      }
      }*/
    
    for(i = 0; i < 50; i++){
	if(data[i]["State"] == states[a].id){
	    McDensity = parseFloat(data[i]["Whole Foods Per 100,000"]);
	    McDensity *= 125;
	    McColor = 100 - McDensity;
	    states[a].style.fill = "hsl(300, 100%, " + McColor + "%)";
	    states[a].innerText = data[i]["Whole Foods Per 100,000"];
	    //var McDensityAtt = states[a].createAttribute("McDensity");
	    //McDensityAtt = data[i]["McDonald's Per 100,000"]
	    //states[a].setAttributeNode(

	}
    }

}

var k;
for(k = 0; k < 50; k++){
    colorState(k);
}

var l;
for(l = 0; l < 50; l++){
    states[l].addEventListener("mouseover", function(){
	    stateDisplay.innerHTML = "Whole Foods per 100,000 in " + this.id + ": "  + this.innerText;
	});
}

pic.addEventListener("click", function(){
	homeButt.submit();
    });