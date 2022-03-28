export async function getData() {
  try {
    let request = await fetch('https://fakestoreapi.com/products');
    let response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
