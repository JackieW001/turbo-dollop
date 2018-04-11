var svg = document.getElementById("svg");

var info = [
    {
	"a": 150,
	"b": 40,
    },
    {
	"a": 200,
	"b": 10,
    }

];

var plot = function(e){
    var cont = d3.select("svg");
    var circles = cont.selectAll("circle").data(info).enter();

    // circles
    circles.append("circle")
	.attr("cy", function(d) { return d.a; })
	.attr("cx", function(d,i) { return d.b; })
	.attr("r", 10)
	.attr("fill", "red")

}
plot();
