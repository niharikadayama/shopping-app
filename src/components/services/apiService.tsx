import axios from 'axios';
export async function getData() {
  try {
    let request = await axios.get('https://fakestoreapi.com/products');
    return request;
  } catch (error) {
    console.log(error);
  }
}
