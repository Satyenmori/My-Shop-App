export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:2222/product");
    const data = await response.json();
    resolve({ data });
  });
}

// fetch Category and Brand Api

export function fetchCategory() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:2222/category");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrand() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:2222/brand");
    const data = await response.json();
    resolve({ data });
  });
}
