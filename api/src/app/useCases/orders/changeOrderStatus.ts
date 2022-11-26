import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    // Recebendo orderId de parametros e status do body
    const { orderId } = req.params;
    const { status } = req.body;

    // Verificando se o status é uma das três opções.
    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({
        message:
          'Status should be one of these: WAITING, IN_PRODUCTION and DONE',
      });
    }
    // Atualização do status do pedido.
    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
}
