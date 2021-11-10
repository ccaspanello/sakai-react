import axios from 'axios';
import ProductResponse from "../models/ProductResponse";
import Product from "../models/Product";

export class ProductService {

    getProductsSmall() : Promise<Product[]> {
        return axios.get<ProductResponse>('assets/demo/data/products-small.json').then(res => res.data.data);
    }

    getProducts() : Promise<Product[]>  {
        return axios.get<ProductResponse>('assets/demo/data/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() : Promise<Product[]>  {
        return axios.get<ProductResponse>('assets/demo/data/products-orders-small.json').then(res => res.data.data);
    }
}
