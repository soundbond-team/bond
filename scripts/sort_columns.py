# sort columns of dataframe


import pandas as pd
data = pd.read_json("./data/accountTwitterData.json", orient="records")

def sort_columns(data):
    data = data.sort_index(axis=1)
    return data

data = sort_columns(data)

# save to json
data.to_json("./data/accountTwitterData.json", orient="records")

