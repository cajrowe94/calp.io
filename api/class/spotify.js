
/** Spotify API class */

const config = require('../../config.js');

/** Spotify creds */

const SPOTIFY_CLIENT_ID = config.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = config.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_URI = config.SPOTIFY_URI;

/** Init conn to mongo DB */

const MongoClient = require('mongodb').MongoClient;
const uri = SPOTIFY_URI;
const client = new MongoClient(uri, {'useNewUrlParser': true, 'useUnifiedTopology': true});

class Spotify {
  constructor(request) {
    this.request_ = request;
  }

  get_request() {
    return this.request_;
  }

  async handle_request() {
    var req = this.get_request();

    try {
      // connect to our db
      await client.connect();

      if (!req.method) { // no method sent
        return {
          'message': 'Error: method parameter not found.',
        };
      } else if (!this[req.method]){ // method not set up
        return {
          'message': 'Error: method \'' + req.method + '\' not found in class Spotify.',
        };
      }
      // try and fulfill the request
      return await this[req.method](client);
    } catch (e) {
      return e;
    } finally {
      // close the db connection
      client.close();
    }
  }

  /**
   * Read spotify streams
   *
   * Available filters:
   * {
   *   'artistName': string,
   *   'trackName': string,
   *   'msPlayed': int,
   *   'endTime': datetime (Y-M-D H:M)
   * }
   *
   */
  async read_streams(db_conn) {
    // init conn to db and collection
    const db = db_conn.db('Spotify');
    let collection = db.collection('stream');

    // get a query
    let request = this.get_request();
    let query = request.parameters;

    try {
      let documents = [];

      await collection.find(
        query ? query : {}
      )
        .toArray()
        .then(items => {
          documents = items;
        });

      return documents;
    } catch (e) {
      return e;
    }
  }
}

module.exports = Spotify;
