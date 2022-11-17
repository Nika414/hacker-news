const options = {
  baseUrl: 'https://hacker-news.firebaseio.com/v0/',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
  },
};

export default options;

const createMarkup = (markup) => ({ __html: markup });

export { createMarkup };
