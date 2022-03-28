export async function getData() {
  try {
    let request = await fetch('https://fakestoreapi.com/products');
    console.log(request);
    let response = await request.json();
    return response;
  } catch (error) {
    return error;
  }
}
