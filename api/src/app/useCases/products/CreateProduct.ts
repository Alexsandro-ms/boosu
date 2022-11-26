import { Request, Response } from 'express';

import { Product } from '../../models/Products';

export async function createProduct(req: Request, res: Response) {
  try {
    /*
     * Usando o operador de encadeamento opcional para verificar se o req.file existe e, se existir, obterá
     * o nome do arquivo.
     */
    const imagePath = req.file?.filename;
    // Desestruturando um objeto do req.body.
    const { name, description, price, category, ingredients } = req.body;

    // Criando um novo produto.
    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    // Enviando uma resposta ao cliente com um código de status 201 e uma mensagem, de produto criado.
    res.status(201).json({
      message: 'Product has been created!',
      product,
    });
  } catch (error) {
    // Enviando uma resposta ao cliente com um código de status 500 e uma mensagem, Internal Server Error.
    res.sendStatus(500);
  }
}
