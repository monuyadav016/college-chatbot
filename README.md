# college-chatbot
A chatbot for college students using Dialogflow. Setup a chatbot for your college or school with ease.

## Installation instructions
1. [Install nodejs for your operating system](https://nodejs.org/en/)
2. [Train your agent on Dialogflow](https://dialogflow.com/)
3. [Select or create a Cloud Platform project](https://console.cloud.google.com/project)
4. [Enable the Dialogflow API for your project](https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com)
5. Clone this code repository
```
$ git clone https://github.com/monuyadav016/college-chatbot.git
```
6. [Set up authentication with a service account in Google cloud console then download and copy the keys to the cloned repository](https://cloud.google.com/docs/authentication/getting-started)
7. Change the PROJECT_ID variable in the .env file as in the Dialogflow agent settings page.
8. Change the KEY_FILE variable in the .env file as is the name of the file with service account keys from your Google cloud project.
9. Change the SECRET variable to any random string as this will be used for creating sessions.
10. Change the url variable in the file public/js/index.js when deploying online.
11. Change the bot.png and the favicon.ico as desired.