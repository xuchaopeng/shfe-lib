const isDev = process.env.NODE_ENV === 'development';

export const url = {
  url1: isDev
    ? 'https://testapi.eastday.com/url1'
    : 'https://api.eastday.com/url1',
  url2: isDev
    ? 'https://testapi.eastday.com/url2'
    : 'https://api.eastday.com/url2'
};
