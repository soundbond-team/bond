import random
import json

# file to use differents ML models and compare them

# load the data 
users_json = json.load(open('./data/accountData.json'))

def prediction(user_id: int):
    # use the better model to predict if the user is fake or not
    # for the moment we return True or False randomly
    return random.choice([True, False])