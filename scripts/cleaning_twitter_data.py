import pandas as pd

data_fake = pd.read_csv("./data/twitter/fusers.csv")
data_verified = pd.read_csv("./data/twitter/users.csv")

# concatenante dataframes into one, and add column isFake
data_fake["isFake"] = 1
data_verified["isFake"] = 0
data = pd.concat([data_fake, data_verified])

# create columns userIsPrivate, userHasProfilePic

# search if user has profile pic


# create columns userBiographyLength, usernameDigitCount, usernameLength for each user
data["userBiographyLength"] = data.apply(lambda row: len(str(row["description"])), axis=1)
data["usernameDigitCount"] = data.apply(lambda row: sum(c.isdigit() for c in str(row["screen_name"])), axis=1)
data["usernameLength"] = data.apply(lambda row: len(str(row["screen_name"])), axis=1)

# removing uncessary columns
data = data.drop(["listed_count","name", "protected","screen_name", "created_at", "lang", "location", "default_profile", "default_profile_image", "geo_enabled", "profile_banner_url", "profile_use_background_image", "profile_background_image_url_https", "profile_text_color", "profile_image_url_https", "profile_sidebar_border_color", "profile_background_tile", "profile_sidebar_fill_color", "profile_background_image_url", "profile_background_color", "profile_link_color", "utc_offset", "verified", "dataset", "updated", "description", "favourites_count", "url", "time_zone"], axis=1)

# renaming columns
data = data.rename(columns={"statuses_count": "userMediaCount", "followers_count": "userFollowerCount", "friends_count": "userFollowingCount", "profile_image_url": "userHasProfilPic"})

# change the url of the profile pic to boolean
data["userHasProfilPic"] = 0 if data["userHasProfilPic"].isnull().any() else 1

# save to json
data.to_json("./data/accountTwitterData.json", orient="records")
