console.log("hello");
console.log(data);

var svg = document.getElementById("svg");

var plot = function(e){
    var cont = d3.select("svg");

    var xscale, yscale, rscale;
    //////// CIRCLES //////////
    var circles = cont.selectAll("circle").data(data).enter();
    circles.append("circle")
	.attr("cy", function(d) {
	    yscale = 690-(d["McDonald's Per 100,000"] * 90);
	    return yscale; })
	.attr("cx", function(d) {
	    xscale = (d["Income"].replace(",", ""))/50 - 700;
	    return xscale; })
	.attr("r", function(d) {
	    rscale = Math.sqrt(d["Total Population"].replace(",", "").replace(",", "")) / 100;
	    return rscale;})
    	.attr("fill", "rgba(0,0,255,0.25)")
	.attr("stroke", "rgba(0,0,255,1)")
	.attr("stroke-width", 2)
	.attr("onmouseover","evt.target.setAttribute('fill','rgba(255,0,0,0.25)'); evt.target.setAttribute('stroke','rgba(255,0,0,1)')")
	.attr("onmouseout","evt.target.setAttribute('fill','rgba(0,0,255,0.25)'); evt.target.setAttribute('stroke', 'rgba(0,0,255,1)')")
    // tooltip
	.append("svg:title")
	.text(function(d) { return d["State"] + "\n" +
			    "Population: " + d["Total Population"] + "\n" +
			    "Median Income: $" + d["Income"] + "\n" +
			    "McDonald's Per Capita: " +  d["McDonald's Per 100,000"]
			    ; });


    //////// LINES ///////////
    var lines = cont.selectAll("line").data(data).enter();
    // horizontal line at bottom
    var xaxis = document.createElementNS("http://www.w3.org/2000/svg","line");
    xaxis.setAttribute("stroke", "lightgrey");
    xaxis.setAttribute("x1", 100);
    xaxis.setAttribute("y1", 450);
    xaxis.setAttribute("x2", 900);
    xaxis.setAttribute("y2", 450);
    svg.appendChild(xaxis);
    
    // vertical line on side
    var yaxis = document.createElementNS("http://www.w3.org/2000/svg","line");
    yaxis.setAttribute("stroke", "lightgrey");
    yaxis.setAttribute("x1", 900);
    yaxis.setAttribute("y1", 100);
    yaxis.setAttribute("x2", 900);
    yaxis.setAttribute("y2", 450);
    svg.appendChild(yaxis);

    ///////// TEXT ////////////
    var text = cont.selectAll("text").data(data).enter();

    text.append("text")
	.attr("y", function(d) { return 695 -(d["McDonald's Per 100,000"] * 90); })
	.attr("x", function(d) { return (d["Income"].replace(",", ""))/50 - 3.5*(d["State"].length) - 700; })
	.attr("text-shadow", "6px 6px grey")
	.text(function(d) {
	    if ((Math.sqrt(d["Total Population"].replace(",", "").replace(",", "")) / 100) > 25){
		return d["State"];
	    }
	    return "";

	})
    
    // X axis text
    var xaxisText = document.createElementNS("http://www.w3.org/2000/svg","text");
    xaxisText.setAttribute("y", 470);
    xaxisText.setAttribute("x", 500);
    xaxisText.innerHTML = "Median Income";
    svg.appendChild(xaxisText);

    // Y axis text
    var yaxisText = document.createElementNS("http://www.w3.org/2000/svg","text");
    yaxisText.setAttribute("transform", "translate(940,150)rotate(90)");
    yaxisText.setAttribute("y", 10);
    yaxisText.setAttribute("x", 10);
    yaxisText.innerHTML = "Number of McDonalds Per Capita";
    svg.appendChild(yaxisText);

    
    
   
}

plot();
