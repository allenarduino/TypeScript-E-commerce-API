import { Router,Request, Response } from 'express';
const router = Router();
import multer from '../middlewares/multer';
import path from "path";
import fs from "fs-extra";

import { 
     getProducts,
     createProduct, 
     getSingleProduct, 
     deleteProduct, 
     updateProduct 
    } from '../controllers/product.controller';






const type = multer.single("product_img");

router.post("/create_product",type,createProduct);
router.get("/get_products",getProducts);
router.get("/products/:id",getSingleProduct);
router.delete("/products/:id",deleteProduct);
router.put("/products/:id",updateProduct)


export default router; 