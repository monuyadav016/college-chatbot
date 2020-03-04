const dialogflow = require('dialogflow');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// A unique identifier for the given session
const sessionId = uuid.v4();

app.post('/send-msg', (req, res) => {
  runDialog(req.body.message).then(data => {
    res.send({reply : data})
  })
})



/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runDialog(message, projectId = 'college-bot-82081') {
  

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
    keyFilename : "/home/monu/Desktop/Projects/Chatbot/college-bot-9a2ca19f825b.json"
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
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }

  return result.fulfillmentText;
}

app.listen(port, () => {
  console.log('Running on port '+port);
})