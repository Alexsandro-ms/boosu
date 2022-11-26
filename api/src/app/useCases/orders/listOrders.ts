import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    // Desestruturando o categoryId recebido de parametros .
    const { categoryId } = req.params;
    // Usando o model Order para encontrar todos os pedidos no banco de dados.
    const orders = await Order.find()
      // Classificando os pedidos pela data em que foram criados.
      .sort({ createdAt: 1 })
      // Preenchendo o campo de produto da matriz de produtos.
      .populate('products.product');

    // Enviando os pedidos ao cliente, na forma de json.
    res.json(orders);
  } catch (error) {
    res.sendStatus(500);
  }
}
