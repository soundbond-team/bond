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
    data = data.dropna() #dropna supprime les lignes avec des valeurs manquantes
    return data

data_clean = clean_data(data)

print(data_clean)

#export data cleaning to json
def export_data_to_json_orient(data_clean):
    data_clean.to_json("./data/accountData_clean.json", orient="records")

export_data_to_json_orient(data_clean)

#compare data before and after cleaning
def compare_data(data, data_clean):
    print("Data before cleaning: ", data.shape)
    print("Data after cleaning: ", data_clean.shape)

compare_data(data, data_clean)


