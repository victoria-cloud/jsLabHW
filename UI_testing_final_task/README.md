# Final project

### Description

For this task you have to create UI tests to check 
[Conduit](http://localhost:8081) using WebdriverIO and Axios.

### Tasks

##### Install docker (desktop)

##### Run docker-compose-conduit.yml file

##### Open the application in browser on port 8081

Implement all of the tests listed below using the Page Object pattern and API requests.

##### User is able to log out
1. Create a new user via API
1. Login to application (use method ApiHelper.loginToApp)
1. Open the Settings page
1. Click on the Log Out button
1. Verify that the Home page is open
1. Verify that the Header contains the following links - 'Home', 'Sign in', 'Sign up'

##### User is able to view Favorited articles on the Profile page
1. Create a new user via API
1. Create a new article via API
1. Add created article to favorite via API
1. Login to application (use method ApiHelper.loginToApp)
1. Open the profile page
1. Click on the Favorited Articles Tab
1. Verify that there is one article
1. Verify that the article contains correct title

##### User is able to delete article comment on the Article Details page
1. Create a new user via API
1. Create a new article via API
1. Add comment to article via API
1. Login to application (use method ApiHelper.loginToApp)
1. Open the Article Details page for the previously created article
1. Click on the delete comment icon
1. Verify that there are no commets for the opened artcile
