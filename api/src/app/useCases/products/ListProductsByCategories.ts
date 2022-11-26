import { Request, Response } from 'express';

import { Product } from '../../models/Products';

export async function listProductsByCategories(req: Request, res: Response) {
  try {
    // Recebendo o id da categoria via parametros
    const { categoryId } = req.params;

    /* Usando o método find do model Product,
     * para obter todos os produtos do banco de dados.
     * -------------------------------------
     * Where método do mongoose que permite filtrar
     * os resultados de uma consulta.
     * -------------------------------------
     * Um método da biblioteca mongoose que
     * nos permite filtrar os resultados de uma
     * consulta.
     */
    const products = await Product.find().where('category').equals(categoryId);

    // Enviando os produtos via json para o cliente
    res.json(products);
  } catch (error) {
    res.sendStatus(500);
  }
}
