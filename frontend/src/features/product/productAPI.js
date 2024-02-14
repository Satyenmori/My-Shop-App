
export function fetchCount() {
  return new Promise(async(resolve) =>{
    const response = await fetch("http://localhost:2222");
    const data = await response.json();
    resolve({ data });
  }
    
  );
}
