import axios from 'axios';

export default axios.create({
  method: 'GET',
  url: 'https://ali-express1.p.rapidapi.com/productsByCategoryV2/205838503',
  params: {
    sort_type: 'default',
    page: '1',
    page_size: '20',
    sort_order: 'default',
  },
  headers: {
    'x-rapidapi-host': 'ali-express1.p.rapidapi.com',
    'x-rapidapi-key': 'a81af6cdb4msh5f4765942694d0cp1aa5c2jsnaa9d95be8869',
  },
});

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });
