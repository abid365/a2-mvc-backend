import { z } from 'zod';

// zod validation
// Variant Schema
const variantValidationSchema = z.object({
  type: z.string().nonempty('Type is required'),
  value: z.string().nonempty('Value is required'),
});

// Inventory Schema
const inventoryValidationSchema = z.object({
  quantity: z.number().nonnegative('Quantity is required'),
  inStock: z
    .boolean()
    .refine((value: boolean) => value === true || value === false, {
      message: 'Instock is required',
    }),
});

// Product Schema
const productValidationSchema = z.object({
  name: z
    .string()
    .nonempty('Name is required')
    .max(20, 'Name can not be more than 20 characters')
    .trim(),
  description: z.string().optional(),
  price: z.number().nonnegative('Price is required').min(0, 'Too few phones'),
  category: z.string().nonempty('Category is required'),
  tags: z.array(z.string().nonempty('Tags are required')),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
