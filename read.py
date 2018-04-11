import csv
reader = csv.DictReader(open('data/mcd.csv', 'r'))

list = []
for line in reader:
    list.append(line)

#print list

for item in list:
    item.pop("Rank")

#print list

reader = csv.DictReader(open('data/income.csv', 'r'))

income_list = []
for line in reader:
    income_list.append(line)

print income_list

for state in income_list:
    
