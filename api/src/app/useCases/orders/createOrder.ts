import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    /* Desestruturando tables
     * e products recebido pelo corpo da requisição.
     */

    const { table, products } = req.body;

    /* Criando um novo pedido com a tabela e produtos
     * recebidos no corpo da requisição.
     */

    if (!table || !products)
      return res
        .status(500)
        .json({ message: 'It is necessary to have a table and products' });

    const order = await Order.create({ table, products });

    // Preenchendo o pedido com os detalhes do produto.
    const orderDetails = await order.populate('products.product');

    /* Enviando uma resposta ao cliente com um código de
     * status 201 e uma mensagem.
     */
    res.status(201).json({
      message: 'Order has been created!',
      order,
    });
  } catch (error) {
    res.sendStatus(500);
  }
}
