from flask import Flask, render_template, request
import csv

my_app = Flask(__name__)

reader = csv.DictReader(open('data/mcd.csv', 'r'))

list = []
for line in reader:
    list.append(line)

#print list

for item in list:
    item.pop("Rank")

print list

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

#print list

@my_app.route('/')
def root():
    return render_template("home.html", data = list)


if __name__ == "__main__":
    my_app.debug = True
    my_app.run()
