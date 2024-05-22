import { Schema, model } from 'mongoose';
import { Product, Variant, Inventory } from './product/product.interface';

const variantSchema = new Schema<Variant>({
  type: { type: String },
  value: { type: String },
});

const InventorySchema = new Schema<Inventory>({
  quantity: { type: Number },
  inStock: { type: Boolean },
});

const productSchema = new Schema<Product>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: variantSchema,
  inventory: InventorySchema,
});

export const ProductModel = model<Product>('Product', productSchema);
