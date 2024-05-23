import { Schema, model } from 'mongoose';
import { Product, Variant, Inventory } from './product/product.interface';

const variantSchema = new Schema<Variant>({
  type: { type: String, required: [true, 'Type is required'] },
  value: { type: String, required: [true, 'Value is required'] },
});

const InventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: [true, 'Quantity is required'] },
  inStock: { type: Boolean, required: [true, 'Instock is required'] },
});

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  description: { type: String },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Too few phones'],
  },
  category: { type: String, required: [true, 'Category is required'] },
  tags: { type: [String], required: [true, 'Tags are required'] },
  variants: [variantSchema],
  inventory: InventorySchema,
});

export const ProductModel = model<Product>('Product', productSchema);
