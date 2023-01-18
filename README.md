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

##### Automated Account Detection
1. `user_media_count` - Total number of posts, an account has.
2. `user_follower_count` - Total number of followers, an account has.
3. `user_following_count` - Total number of followings, an account has.
4. `user_has_highlight_reels` - Whether an account has at least one highlight reel present, or not.
5. `user_has_url` - Whether an account has an url present in biography, or not.
6. `user_biography_length` - Number of characters present in account biography.
7. `username_length` - Number of characters present in account username.
8. `username_digit_count` - Number of digits present in account username.
9. `media_comment_numbers` - Total number of comments for a given media.
10. `media_comments_are_disabled` - Whether given media is closed for comments, or not.
11. `media_has_location_info` - Whether given media includes location, or not.
12. `media_hashtag_numbers` - Total number of hashtags, given media has.
13. `media_upload_times` - Media upload timastamps.
14. `automated_behaviour` - True, if account is an automated account, False otherwise
