
/**
 * WordsAPI class
 * Available methods
 *  - get_random_word
 *  - get_word_details
 */

const unirest = require('unirest');
const config = require('../../config.js');

/** Credentials */

const WORDS_API_HOST = config.WORDS_API_HOST;
const WORDS_API_KEY = config.WORDS_API_KEY;

class Words {
  constructor(request) {
    this.request_ = request;
  }

  get_request() {
    return this.request_;
  }

  async handle_request() {
    let req = this.get_request();

    try {
      if (!req.method) { // no method sent
        return {
          'message': 'Error: method parameter not found.',
        };
      } else if (!this[req.method]){ // method not set up
        return {
          'message': 'Error: method \'' + req.method + '\' not found in class Words.',
        };
      }
      // try and fulfill the request
      let res = await this[req.method]();
      return res.body;
    } catch (e) {
      return e;
    }
  }

  /**
   * Get the request object for hitting the WordsAPI
   * This sets the headers and host
   */
  get_api_request_object() {
    let req = unirest('GET', 'https://' + WORDS_API_HOST + '/words/');

    req.headers({
      'x-rapidapi-key': WORDS_API_KEY,
      'x-rapidapi-host': WORDS_API_HOST,
      'useQueryString': true,
    });

    return req;
  }


  /**
   * https://www.wordsapi.com/docs/#random-words
   * Get a totally random word
   * Does not accept any arguments
   */
  async get_random_word() {
    let get = this.get_api_request_object();

    get.query({
      'random': 'true',
    });

    get.end();

    return await get;
  }

  /**
   * https://www.wordsapi.com/docs/#get-word-details
   * Get details about a word
   * arguments: {
   *   'word': 'foo'
   *   'details': 'bar'
   * }
   */
  async get_word_details() {
    let req = this.get_request();
    let get = this.get_api_request_object();

    if (req.word) {
      get.options.url += req.word;
    }

    if (req.details) {
      get.options.url += ('/' + req.details);
    }

    get.end();

    return await get;
  }

  /**
   * https://www.wordsapi.com/docs/#searching
   * Search for a word
   * arguments: {
   *   'filter': {
   *     'filter1': 'value1',
   *     'filter2': 'value2',
   *     ...
   *   }
   * }
   */
  async search_word() {
    let req = this.get_request();
    let get = this.get_api_request_object();

    if (req.filter) {
      let keys = Object.keys(req.filter);
      let i = 1;

      // convert our page number back to int :|
      if (req.filter.page) {
        req.filter.page = Number(req.filter.page);
      }

      get.options.url += '?';

      keys.forEach(key => {
        get.options.url += (
          key +
          '=' +
          req.filter[key] +
          (i < keys.length ? '&' : '')
        );

        i++;
      });
    }

    get.end();

    return await get;
  }
}

module.exports = Words;
