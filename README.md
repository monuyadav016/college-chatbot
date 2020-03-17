# college-chatbot
A Chatbot for Colleges using Dialogflow and nodejs. Setup a chatbot for your college or school with ease.

## Installation instructions
1. [Install nodejs for your operating system](https://nodejs.org/en/)
2. [Train your agent on Dialogflow](https://dialogflow.com/)
3. [Select or create a Cloud Platform project](https://console.cloud.google.com/project)
4. [Enable the Dialogflow API for your project](https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com)
5. Clone this code repository
```
$ git clone https://github.com/monuyadav016/college-chatbot.git
```
6. Install dependencies by running the following command inside the cloned repository
```
$ npm install
```
7. [Set up authentication with a service account in Google cloud console](https://cloud.google.com/docs/authentication/getting-started) then download and copy the keys to the cloned repository.
8. Change the PROJECT_ID variable in the .env file as in the Dialogflow agent settings page.
9. Change the KEY_FILE variable in the .env file as is the name of the file with service account keys from your Google cloud project.
10. Change the SECRET variable to any random string as this will be used for creating sessions.
11. Change the url variable in the file public/js/index.js when deploying online.
12. Change the bot.png in public/style/ and the favicon.ico as desired.

## Deploying on Heroku
  - Follow the instructions specific to your app after creating an app on [heroku](http://heroku.com/) or get further help from [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).
  - Make sure the change the url variable to the one specific to your heroku app in the public/js/index.js before deploying.


## Things to know
Implement webhooks yourself if needed.