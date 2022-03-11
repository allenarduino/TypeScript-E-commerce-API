import { Request, Response } from 'express';

import { connect } from '../database'
import { Product } from '../interface/Product';

export async function getProducts(req: Request, res: Response):Promise<Response> {
    const conn = await connect();
    const products = await conn.query('SELECT* FROM products');
    return res.status(200).json(products);
    
}

export async function createProduct(req: Request, res: Response) {
    const product_img=req.file!.path;
    const {name,price,category,description}=req.body;
    const newProduct:Product={name, price,category,product_img,description};
    console.log(newProduct);
    const conn = await connect();
    await conn.query('INSERT INTO products SET ?', [newProduct]);
    return res.json({
        message: 'Product Created'
    });
}

export async function getSingleProduct(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const product = await conn.query('SELECT * FROM products WHERE id = ?', [id]);

    return res.json(product[0]);
}

export async function deleteProduct(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM products WHERE id = ?', [id]);
    return res.json({
        message: 'Product deleted'
    });
}

export async function updateProduct(req: Request, res: Response) {
    const id = req.params.id;
    const updatedProduct: Product = req.body;
    const conn = await connect();
    await conn.query('UPDATE products SET ? WHERE id = ?', [updatedProduct, id]);
    return res.json({
        message: 'Product updated'
    });
}