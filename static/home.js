console.log("test");
//console.log(data);
//console.log(incomes);
//console.log(obese);

var svg = d3.select("body").append("svg")
svg
    .attr("width", 1000)
    .attr("height", 500);


var incomeButt = document.getElementById("Income");
var obesityButt = document.getElementById("Obesity");
var densityButt = document.getElementById("Density");

var xscale, yscale, rscale;
//////// CIRCLES //////////
var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cy", function(d) {
	yscale = 690-(d["McDonald's Per 100,000"] * 90);
	return yscale; })
    .attr("cx", function(d) {
	xscale = (d["Income"].replace(",", ""))/50 - 700;
	return xscale; })
    .attr("r", function(d) {
	rscale = Math.sqrt(d["Total Population"]) / 100;
	return rscale;})
    .attr("fill", "rgba(0,0,255,0.25)")
    .attr("stroke", "rgba(0,0,255,1)")
    .attr("stroke-width", 2)
    .attr("onmouseover","evt.target.setAttribute('fill','rgba(255,0,0,0.25)'); evt.target.setAttribute('stroke','rgba(255,0,0,1)')")
    .attr("onmouseout","evt.target.setAttribute('fill','rgba(0,0,255,0.25)'); evt.target.setAttribute('stroke', 'rgba(0,0,255,1)')")
// tooltip
circles
    .append("svg:title")
    .text(function(d) { return d["State"] + "\n" +
			"Population: " + d["Total Population"] + "\n" +
			"Median Income: $" + d["Income"] + "\n" +
			"McDonald's Per 100,000 Population: " +  d["McDonald's Per 100,000"]
			"Obesity Prevalence: " + d["Obesity"] + "%"
			"Population Density: " + d["Density"] + " Population Per Square Mile" 
			; });
console.log(circles);

//////// LINES ///////////
// horizontal line at bottom
svg.append("line")
    .style("stroke", "black")
    .attr("x1", 100)
    .attr("y1", 450)
    .attr("x2", 900)
    .attr("y2", 450);

// vertical line on side
svg.append("line")
    .style("stroke", "black")
    .attr("x1", 900)
    .attr("y1", 50)
    .attr("x2", 900)
    .attr("y2", 450);

// X axis text
var xAxisText = svg.append("text")
    .attr("x", 500)
    .attr("y", 470)
    .text("Median Income");

// Y axis text
var yAxisText = svg.append("text")
    .attr("transform", "translate(940,150)rotate(90)")
    .attr("x", 10)
    .attr("y", 10)
    .text("Number of McDonalds Per Capita");

obesityButt.addEventListener('click', obesity);


function obesity(e) {
    console.log("switching to obesity");
    circles
	.transition()
	.duration(2000)
	.attr('cx', function(d) {
	    xscale = (d["Obesity"] * 8.5 + (29.5 * (d["Obesity"] - 17.6)));
	    return xscale; })
    xAxisText
	.text("Obesity");
}

incomeButt.addEventListener('click', income);

function income(e) {
    console.log("switching to income");
    circles
	.transition()
	.duration(2000)
	.attr("cx", function(d) {
	    xscale = (d["Income"].replace(",", ""))/50 - 700;
	    return xscale; });
    xAxisText
	.text("Median Income");
}

densityButt.addEventListener('click', density);

function density(e) {
    console.log("switching to density");
    circles
	.transition()
	.duration(2000)
	.attr("cx", function(d) {
	    xscale = (d["Density"].replace(",", ""))/1.75 + 150;
	    return xscale; });
    xAxisText
	.text("Population Density");
}
    
