import { Request, Response } from 'express';

import { Product } from '../../models/Products';

export async function listProducts(req: Request, res: Response) {
  try {
    // Usando o método find no modelo de Product para obter todos os produtos do banco de dados.
    const products = await Product.find();

    // Envio dos produtos ao cliente.
    res.json(products);
  } catch (error) {
    // Enviando um código de status de 500 para o cliente.
    res.sendStatus(500);
  }
}
