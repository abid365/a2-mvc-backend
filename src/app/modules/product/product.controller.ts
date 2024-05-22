import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    //   calling service function to insert product into database
    const result = await ProductServices.createProductIntoDb(product);

    //   sending response upon getting the data
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
};
