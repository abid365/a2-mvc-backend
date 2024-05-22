import { ProductModel } from '../product.model';
import { Product } from './product.interface';

// create products
const createProductIntoDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

// get products
const getAllProductsFromDb = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductsFromDb,
};
