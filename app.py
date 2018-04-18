from flask import Flask, render_template, request
import csv

my_app = Flask(__name__)

reader = csv.DictReader(open('data/mcd.csv', 'r'))

list = []
for line in reader:
    list.append(line)

#print list

for i in list:
    i["Total Population"] = int(i["Total Population"].replace(",",""))
    
for item in list:
    item.pop("Rank")

#print "\nMcDonalds list"
#print list

reader = csv.DictReader(open('data/income.csv', 'r'))

income_list = []
for line in reader:
    income_list.append(line)

#print income_list

for state in income_list:
    name = state['State']
    income = state['Median income']
    for statey in list:
        if statey['State'] == name:
            statey['Income'] = income

#print "\nMedian income list"
#print income_list

reader = csv.DictReader(open('data/2014_16_obesity.csv', 'r'))
obese_list = []
for obese in reader:
    obese_list.append(obese)

#print obese_list

for item in obese_list:
    item.pop('95% CI')

print "\nObese list"
#print obese_list

for lien in list:
    lien["Obesity"] = 0

#print list

for line in obese_list:
    for row in list:
        if line["State"] == row["State"]:
            row["Obesity"] = line["Prevalence"]

#print list

reader = csv.DictReader(open('data/pop_density.csv', 'r'))
for item in reader:
    #print item
    for row in list:
        if item['STATE_OR_REGION'] == row["State"]:
            row["Density"] = item["2010_DENSITY"]

print list
            
@my_app.route('/')
def root():
    sorted_list = sorted(list, key=lambda d: d['Total Population'], reverse=True)
    return render_template("home.html", data = sorted_list, incomes = income_list, obese = obese_list)

for row in list:
    print row["Density"]

if __name__ == "__main__":
    my_app.debug = True
    my_app.run()
