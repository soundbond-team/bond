# Partie Bond
*My name is Bond, James Bond*

Ici on se focalise sur l'aspect réseau social de SoundBond. L'idée est de travailler sur un système de vérification des comptes utilisateurs grâce au machine Learning.

### Données

Le jeu de données contient deux jeux de données:

##### Fake Account Detection
1. `user_media_count` - Total number of posts, an account has.
2. `user_follower_count` - Total number of followers, an account has.
3. `user_following_count` - Total number of followings, an account has.
4. `user_has_profil_pic` - Whether an account has a profil picture, or not.
5. `user_is_private` - Whether an account is a private profile, or not.
6. `user_biography_length` - Number of characters present in account biography.
7. `username_length` - Number of characters present in account username.
8. `username_digit_count` - Number of digits present in account username.
9. `is_fake` - True, if account is a spam/fake account, False otherwise

### Représentation des données
1. Radar chart -> this chart discribe the distribution of the data into user_media_count,user_biography_length ,fk_username_digit_count,username_length.
2. Scatter Chart -> the relationship between user_follower_count and user_following_count in both real and fake accounts.
3. Pie Chart -> this chart shows the difference in term of DigitNumber in the username in both fake and real accounts.
4. Bar Chart ->  the distribution of public and private accounts appears foreach accounts dataset : fake and real.


### start Server: 
```python main.py```

don't forget to install the requirements.txt: ```pip install -r requirements.txt```

### start Client  :
```npm start```

make sure that your server is running on port 3000


## Intérête pour l'utilisateur

## Validation du modèle