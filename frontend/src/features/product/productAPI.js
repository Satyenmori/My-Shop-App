
export function fetchAllProduct() {
  return new Promise(async(resolve) =>{
    const response = await fetch("http://localhost:2222/product");
    const data = await response.json();
    resolve({ data });
  }
    
  );
}
