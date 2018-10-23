const isPro = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);
console.log('isPro::', isPro);


export const url = {
  url1: isPro
    ? 'https://api.eastday.com/url1'
    : 'https://testapi.eastday.com/url1',
  url2: isPro
    ? 'https://api.eastday.com/url2'
    : 'https://testapi.eastday.com/url2'
};
