# Mickiedees
We aim to show how the income or urbanization of a state correlates to the density of certain restuarants/stores in that state. For example, we predict that poorer states may have more McDonald's per capita than richer states do per capita. Similarily, richer states will likely have more Whole Foods, or other high end supermarkets, than poor states. Our visualization will allow the user to explore the correlation between these two variables. 

Income, population, and urbanization data can be easily obtained from government sources (like the Census). Companies publish data about store location, so that should not be too hard to find.

Whole Foods restaurant count by state: http://fortune.com/2017/06/16/amazon-whole-foods-stores-locations/

McDonald's restaurant count by state: https://247wallst.com/consumer-products/2016/09/04/the-number-of-mcdonalds-in-all-50-states/

Census Income: https://www.census.gov/topics/income-poverty/income/data/tables.html

Census Population: https://www.census.gov/topics/population.html

Census Urbanization: https://www.census.gov/geo/reference/urban-rural.html

When the user first enters the home page of the website, a scatter plot displaying 50 points (one for each state) relating income levels to the number of a certain type of restauraunt (McDonald's) will be displayed. The user can then use buttons to toggle other restaurants such as Whole Foods, Trader Joes, and other fast food chains, to display on the scatter plot. The user can also toggle the x axis between median income and urbanization. We will use D3 transitions to animate the toggling of each of the axis as we can make the scatter points travel up the y axis based on store count and along the x axis based on income/ urbanization. 

A drawing of the layout is included in this repository, named layout.jpg.


