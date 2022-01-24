
/** Spotify API class */

const config = require('../../config.js');

/** Spotify creds */

const SPOTIFY_CLIENT_ID = config.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = config.SPOTIFY_CLIENT_SECRET;
// const SPOTIFY_URI = config.SPOTIFY_URI;

class Spotify {
  constructor(request, client) {
    this.request_ = request;
    this.client = client;
  }

  get_request() {
    return this.request_;
  }

  async handle_request() {
    var req = this.get_request();

    try {
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
      return await this[req.method](this.client);
    } catch (e) {
      return e;
    } finally {
      // nada
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
  async read_2020_streams() {
    // init conn to db and collection
    const db = this.client.db('Spotify');
    let collection = db.collection('stream');

    // get a query
    let request = this.get_request();
    let query = request.parameters;

    try {
      let documents = [];

      await collection.find(
        query ? query : {}
      )
        .sort({'endTime': 1})
        .toArray()
        .then(items => {
          documents = items;
        });

      return documents;
    } catch (e) {
      return e;
    }
  }

  // just bein lazy for now and duplicating the function
  async read_2021_streams() {
    // init conn to db and collection
    const db = this.client.db('Spotify');
    let collection = db.collection('stream2');

    // get a query
    let request = this.get_request();
    let query = request.parameters;

    try {
      let documents = [];

      await collection.find(
        query ? query : {}
      )
        .sort({'endTime': 1})
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
