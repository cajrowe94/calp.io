const config = require("../config.js");
const SPOTIFY_CLIENT_ID = config.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = config.SPOTIFY_CLIENT_SECRET;

class Spotify {
	constructor(request) {
    this.request_ = request;
	}

  get_request() {
    return this.request_;
  }

  foo() {
    console.log('foo!');
  }
}

module.exports = Spotify;
