import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// creating routes

router.post('/products', ProductControllers.createProduct);

export const ProductRoutes = router;
