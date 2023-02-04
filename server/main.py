import fastapi
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel
from typing import List
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from typing import Union

class User(BaseModel):
    id : int
    user_media_count : int
    user_follower_count : int
    user_following_count : int
    user_has_profil_pic : int
    user_is_private : int
    user_biography_length : int
    username_length : int
    username_digit_count : int

class UserPredicted(User):
    is_fake : int

app = fastapi.FastAPI()

users_df = pd.read_json('../data/accountData.json')
users = list()
for index, user in users_df.iterrows():
    users.append(User(
        id = user.id,
        user_media_count = user.userMediaCount,
        user_follower_count = user.userFollowerCount,
        user_following_count = user.userFollowingCount,
        user_has_profil_pic = user.userHasProfilPic,
        user_is_private = user.userIsPrivate,
        user_biography_length = user.userBiographyLength,
        username_length = user.usernameLength,
        username_digit_count = user.usernameDigitCount,
))

users_predicted = list()
for index, user in users_df.iterrows():
    users_predicted.append(UserPredicted(
        id = user.id,
        user_media_count = user.userMediaCount,
        user_follower_count = user.userFollowerCount,
        user_following_count = user.userFollowingCount,
        user_has_profil_pic = user.userHasProfilPic,
        user_is_private = user.userIsPrivate,
        user_biography_length = user.userBiographyLength,
        username_length = user.usernameLength,
        username_digit_count = user.usernameDigitCount,
        is_fake = user.isFake
))


origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# load the model from rf_model.pkl
rf_model = pd.read_pickle('../rf_model.pkl')

def rf_prediction(user: pd.DataFrame) -> int:
    return rf_model.predict(user)
    

@app.get("/users")
def read_users() -> List[User]:
    return users

@app.get("/users/with_prediction")
def read_users_predicted() -> List[UserPredicted]:
    return users_predicted

@app.get("/users/{user_id}/is_fake")    
def read_user(user_id: int) -> Union[bool, str]:
    # load the user with the given id
    user = users_df[users_df['id'] == user_id]
    if user.empty:
        raise fastapi.HTTPException(status_code=404, detail="User not found")
    user = user.drop(['isFake','id','userIsPrivate'], axis=1)
    return True if rf_prediction(user) == 1 else False

if __name__ == "__main__":
    uvicorn.run('main:app', host="localhost", port=8000, reload=True)