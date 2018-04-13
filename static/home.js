console.log("hello");
console.log(data);

var svg = document.getElementById("svg");

var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .text("a simple tooltip");

var plot = function(e){
    var cont = d3.select("svg");

    //////// CIRCLES //////////
    var circles = cont.selectAll("circle").data(data).enter();
    circles.append("circle")
	.attr("cy", function(d) { return (500-(d["McDonald's Per 100,000"] * 50));})
	.attr("cx", function(d) { return ((d["Income"].replace(",", ""))/50 - 700 );})
	.attr("r", function(d) { return Math.sqrt(d["Total Population"].replace(",", "").replace(",", "")) / 100;})
    	.attr("fill", "rgba(0,0,255,0.25)")
	.attr("stroke", "rgba(0,0,255,1)")
	.attr("stroke-width", 2)
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
    lines.append("line")
	.attr("stroke", "lightgrey")
	.attr("x1", 100)
	.attr("y1", 450)
	.attr("x2", 900)
	.attr("y2", 450)
    
    // vertical line on side
    lines.append("line")
	.attr("stroke", "lightgrey")
	.attr("x1", 900)
	.attr("y1", 100)
	.attr("x2", 900)
	.attr("y2", 450)

    ///////// TEXT ////////////
    var text = cont.selectAll("text").data(data).enter();

    text.append("text")
	.attr("y", function(d) { return 510-(d["McDonald's Per 100,000"] * 50); })
	.attr("x", function(d) { return ((d["Income"].replace(",", "")/50) - 720 ); })
	.attr("text-shadow", "6px 6px grey")
	.text(function(d) {
	    if ((Math.sqrt(d["Total Population"].replace(",", "").replace(",", "")) / 100) > 30){
		return d["State"];
	    }
	    return "";

	})
    
    // X axis text
    text.append("text")
	.attr("y", 470)
	.attr("x", 500)
	.text("Median Income")

    // Y axis text
    text.append("text")
	.attr("transform", "translate(940,150)rotate(90)")
	//.attr("y", 10)
	//.attr("x", 10)
	.text("Number of McDonalds Per 100,000 People")
    
    
    
   
}

plot();
