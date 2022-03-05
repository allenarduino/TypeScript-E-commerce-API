import { Router } from 'express';
const router = Router();

import { 
     getProducts,
     createProduct, 
     getSingleProduct, 
     deleteProduct, 
     updateProduct 
    } from '../controllers/product.controller';

router.route('/products')
      .get(getProducts)
      .post(createProduct);

router.route('/products/:id')
      .get(getSingleProduct)
      .delete(deleteProduct)
      .put(updateProduct);

export default router; 