import random
import json
import pandas as pd




# file to use differents ML models and compare them

# load  the data 
#users_json = json.load(open('../data/accountData_clean.json'))

data = pd.read_json('../data/accountData_clean.json')


def prediction(user_id: int):
    # use the better model to predict if the user is fake or not
    # for the moment we return True or False randomly
    return random.choice([True, False])



