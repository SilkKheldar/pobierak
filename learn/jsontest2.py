import json

person2 = []
print(type(person2))  # class 'list'

with open('person.json', 'r') as f:
    person2 = json.load(f)

print(type(person2))  # class 'dict'
print(person2)
