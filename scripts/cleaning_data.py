import pandas as pd
import json

dataset_path = "./data/accountData.json"

#transform json to dataframe
def transform_json_to_dataframe(dataset_path):
    with open(dataset_path) as json_file:
        data = json.load(json_file)
        dataset = pd.DataFrame(data)
    return dataset

data = transform_json_to_dataframe(dataset_path)

#cleaning data
def clean_data(data):
    data = data.dropna()
    return data

data_clean = clean_data(data)

print(data_clean)

