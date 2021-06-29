import { endpoint } from "../config";

function service() {
    const getProductsCategory = async () => {
        const res = await fetch(`${endpoint}/categories`)
        const data = await res.json()
        return data;
    }

    return {
        getProductsCategory,
    };
  }
  
  const productsService = service();
  
  export default productsService;