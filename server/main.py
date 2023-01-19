import fastapi
import uvicorn
from pydantic import BaseModel
from typing import List
import json


class User(BaseModel):
    user_media_count : int
    user_follower_count : int
    user_following_count : int
    user_has_profil_pic : int
    user_is_private : int
    user_biography_length : int
    username_length : int
    username_digit_count : int
    is_fake: int

app = fastapi.FastAPI()

users_json = json.load(open('../data/accountData.json'))
users = list()
for user in users_json:
    users.append(User(
    user_media_count=user['userMediaCount'],
    user_follower_count=user['userFollowerCount'],
    user_following_count=user['userFollowingCount'],
    user_has_profil_pic=user['userHasProfilPic'],
    user_is_private=user['userIsPrivate'],
    user_biography_length=user['userBiographyLength'],
    username_length=user['usernameLength'],
    username_digit_count=user['usernameDigitCount'],
    is_fake=user['isFake']
))

@app.get("/users")
def read_users() -> List[User]:
    return users

if __name__ == "__main__":
    uvicorn.run('main:app', host="localhost", port=8000, reload=True)