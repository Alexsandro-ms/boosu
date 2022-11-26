import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {
  try {
    /* Recebendo orderID dos parâmetros de
     *  solicitação e, em seguida, excluindo o pedido com esse id.
     */
    const { orderId } = req.params;
    await Order.findByIdAndDelete(orderId);

    // Enviando uma resposta sem conteúdo.
    res.sendStatus(204);
  } catch (error) {
    // Enviando uma resposta com o código de status 500.
    res.sendStatus(500);
  }
}
