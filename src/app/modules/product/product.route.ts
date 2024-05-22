import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// creating routes

router.post('/api/products', ProductControllers.createProduct);
