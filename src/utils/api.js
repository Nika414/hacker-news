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

  getCardsInfo() {
    return fetch(`${this._baseUrl}${'newstories.json'}`, {
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res));
  }
}

const api = new Api(options);

export default api;
