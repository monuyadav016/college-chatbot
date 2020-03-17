const dialogflow = require('dialogflow');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config();;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {
      path: "/",
      maxAge:  1800000,  //30 mins
      // httpOnly: true
  }
}));

app.get('/', (req, res) => {
  // A unique identifier for the given session 
  if(req.session.uuid)
  {

  } else {
    req.session.uuid = uuid.v4();
  }
  // console.log("Session ID : " + req.session.uuid);
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/session', (req, res) => {
  // console.log("Session ID : " + req.session.uuid);
  res.send("session uuid is : "+req.session.uuid);
})

app.post('/send-msg', (req, res) => {
  runDialog(req.body.message, req.session.uuid).then(data => {
    res.send({reply : data})
  })
})



/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runDialog(message, sessionId, projectId = 'college-bot-82081') {
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
    keyFilename : path.join(__dirname, 'college-bot-9a2ca19f825b.json')
  });
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: message,
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  // console.log('Detected intent');
  const result = responses[0].queryResult;
  // console.log(`  Query: ${result.queryText}`);
  // console.log(`  Response: ${result.fulfillmentText}`);
  // if (result.intent) {
  //   console.log(`  Intent: ${result.intent.displayName}`);
  // } else {
  //   console.log(`  No intent matched.`);
  // }

  return result.fulfillmentText;
}

// Using it above GET request to "/" does not execute the connected function only serves the index.html file
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('Running on port '+port);
})