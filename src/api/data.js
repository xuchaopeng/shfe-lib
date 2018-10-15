import { url } from './config';

function getData() {
  console.log(url);
  return {
    code: 0,
    msg: '',
    results: [
      {
        name: 'test1'
      },
      {
        name: 'test2'
      }
    ]
  };
}

export default {
  getData
};
