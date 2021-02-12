const config = require('../config.js');

/* Initialize web server */

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const app = express();


app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(cors());

const URI = config.URI;
let client;

/** Init conn to mongo DB */

const MongoClient = require('mongodb').MongoClient
  .connect(URI, {'useUnifiedTopology': true}, function(err, db) {
    if (err) {
      throw err;
    }

    client = db;

    // start the server once we make a connection
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  });

/**
 * API classes/handlers
 * These are hardcoded right now.
 * If there are enough classes, I'll make this more dynamic
 * For now, its much simpler/easier to hardcode these.
 */

/* Spotify */
const spotify = require('./class/spotify.js');

const handle_spotify_request = async (req_body) => {
  const spotify_handler = new spotify(req_body, client);

  try {
    let spotify_response =
      await spotify_handler.handle_request();

    return spotify_response;
  } catch (e) {
    return JSON.stringify(e);
  }
};

/* WordsAPI */
const words = require('./class/words.js');

const handle_words_request = async (req_body) => {
  const words_handler = new words(req_body);

  try {
    let words_response =
      await words_handler.handle_request();

    return words_response;
  } catch (e) {
    return JSON.stringify(e);
  }
};

/**
 * Main entrypoint
 * Calls the classes defined above
 */

app.post('/api', async (request, response, next) => {
  let req_body = {};

  if (
    request &&
    request.body
  ) {
    req_body = request.body;

    let request_response = {
      'message': 'nada',
    };

    switch (req_body.class) {
      case 'spotify':
        request_response = await handle_spotify_request(req_body);
        break;
      case 'words':
        request_response = await handle_words_request(req_body);
        break;
      default:
        response.json({
          'message': 'Class \'' + req_body.class + '\' not found.',
        });
        break;
    }

    response.json(request_response);
  } else {
    response.json({
      'message': 'No request body found',
    });
  }
});
