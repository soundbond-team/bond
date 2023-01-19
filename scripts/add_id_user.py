import json

with open('./data/accountData.json') as f:
    data = json.load(f)

for i in range(len(data)):
    data[i]['id'] = i

with open('./data/accountData.json', 'w') as f:
    json.dump(data, f)
