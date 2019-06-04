# Duet
A mobile first application that allows users to create a secure personalized account that saves important information about their spouse or significant other. Information includes: dates, interests, favorites/wishes, and love languages.

Visit our Heroku Deployed Link: https://frozen-castle-36424.herokuapp.com/

Utilized: HTML5, CSS4, BootStrap4, Javascript, jQuery, Node.js, Sequelize, MySQL, REST APIs.

## Installation
If you would like to download and use this code you will need to:
* npm install:
  * sequelize
  * sequelize-cli
  * mysql2
* create a Heroku app with JAWSdb add-on
  * save your JAWSdb database information into the config.js file to link your database to the application.
  * In your mySQL create a connection to the Heroku database for table viewing.
  
  ## Getting Started
  1. Returning User
  2. New User
  
  ### Returning User
  * Upon opening the application you will be automatically navigated to a screen that has a login button.
  * Click this button to enter the login portal.
  * Enter your chosen username and password.
  * Once verified you will be navigated to the main screen where you will see 4 categories, each containing the saved information for your spouse/significant other.
    * The Dates category shows the list of dates entered and a countdown clock to the next date.
    * The Interests category shows the list of likes and dislikes.
      * Here you can add more and delete interests one at a time by clicking on the Edit or Delete Buttons.
      * To add an interest click on the plus sign under the category the you wishe to add to, fill out the empty text box, select the save button.
      * To delete an interest check the box next to the interest to be removed and select confirm.
     * The Favorites category shows the list of favorites: What the favorite/article is, size of the article, and any notes added about the article.
     * The Love Languages Category shows the love languages with their descriptions in the order of importance as it was inputed by you, the user. 
  * When finished with the application you may navigate to the main page and log out.
  
  ### New User
  * Upon opening the application you will be automatically navigated to a screen that has a login button.
  * Click this button to enter the login portal.
  * Click on the New User button which will navigate you to the new user creation screen.
  * Enter the username and password you would like to use. 
  * Once sumbit is struck the new account is saved and the you will be taken to the information form.
  * New user's will fill out: 
    * Spouse/SO name
    * Important Dates for the relationship
    * The Spouse's/SO's Interest or likes and dislikes
    * The Spouse's/SO's Favorites or Wishes for Purchase (such as: purse or tv)
    * The Spouse's/SO's Love Languages
      * If you are unaware of your spouse's love languages a link to a short quiz will be provided.
      
  ## Continuing Improvements
  * Extend the ability to add and delete from just interests to all categories.
  * Allow users to change multiple entries on one submit instead of individually one at a time.
  * Allow users to enter more than one signigicant other or extend to family members. The application is already set-up for multiple spouses, the ability for the user to enter more than one will be created. 
  
  ## Demos
  Login and New User Login Pages: 
  ![duetHome](https://user-images.githubusercontent.com/46547100/58844750-95c41880-8646-11e9-89ba-e68e8a65e468.PNG)
  
  ![duetlogin](https://user-images.githubusercontent.com/46547100/58844752-95c41880-8646-11e9-944b-984b81cb3eb1.PNG)

  ![duetnewusersignup](https://user-images.githubusercontent.com/46547100/58844757-96f54580-8646-11e9-80ed-d4c65816f721.PNG)

  New User Categories Form/Questions:
  
  ![duetaddSpouse](https://user-images.githubusercontent.com/46547100/58844748-95c41880-8646-11e9-8ec2-2f0acdbf5bca.PNG)

  ![duetnewDates](https://user-images.githubusercontent.com/46547100/58844754-965caf00-8646-11e9-945d-5861dbc17b7e.PNG)
 
  ![duetaddInterests](https://user-images.githubusercontent.com/46547100/58844746-95c41880-8646-11e9-8710-39d07fe55bb3.PNG)

  ![duetnewFavorites](https://user-images.githubusercontent.com/46547100/58844755-965caf00-8646-11e9-8c06-720fd519916b.PNG)

  ![duetnewLL](https://user-images.githubusercontent.com/46547100/58844756-965caf00-8646-11e9-9b28-dab38f992d46.PNG)
  
  Main Screen:
  
  ![duetmainpage](https://user-images.githubusercontent.com/46547100/58844753-95c41880-8646-11e9-8870-0ad5edc8fb7f.PNG)
  
  Dates Category:
  
  ![duetDates](https://user-images.githubusercontent.com/46547100/58844749-95c41880-8646-11e9-96d8-c8db136fe8c8.PNG)
   
