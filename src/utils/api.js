import options from './utils';

export class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _handleResponse(res) {
    if (res.ok) { return res.json(); }
    throw new Error('Произошла ошибка!');
  }

  getCardsIds() {
    return fetch(`${this._baseUrl}newstories.json`, {
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res));
  }

  getCardInfo(itemId) {
    return fetch(`${this._baseUrl}item/${itemId}.json`, {
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res));
  }

  getComment(commentId) {
    return fetch(`${this._baseUrl}item/${commentId}.json`, {
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res));
  }
}

const api = new Api(options);

export default api;
