console.log("hello");
console.log(data);

var svg = document.getElementById("svg");

var plot = function(e){
    console.log("plot");
    var cont = d3.select("svg");
    var circles = cont.selectAll("circle").data(data).enter();

    // circles
    circles.append("circle")
	.attr("cy", function(d) { return (500 - (d["McDonald's Per 100,000"] * 50));})
	.attr("cx", function(d) { return ((d["Income"].replace(",", "")) / 150);})
	.attr("r", function(d) { return Math.sqrt(d["Total Population"].replace(",", "").replace(",", "")) / 250;})
	.attr("fill", "red")

}
plot();
