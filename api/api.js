
/* Initialize web server */

const express = require('express');
const app = express();

// we're parsing application/json
app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000');
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
  const spotify_handler = new spotify(req_body);

  try {
    let spotify_response =
      await spotify_handler.handle_request();

    return spotify_response;
  } catch (e) {
    return JSON.stringify(e);
  }
};

/**
 * GET entrypoint
 * Calls the classes defined above
 */

app.get('/api', async (request, response, next) => {
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
