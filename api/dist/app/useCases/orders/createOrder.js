"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const __1 = require("../../..");
const Order_1 = require("../../models/Order");
function createOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const order = yield Order_1.Order.create({ table, products });
            // Preenchendo o pedido com os detalhes do produto.
            const orderDetails = yield order.populate('products.product');
            /* Enviando uma resposta ao cliente com um código de
             * status 201 e uma mensagem.
             */
            __1.io.emit('orders@new', orderDetails);
            res.status(201).json({
                message: 'Order has been created!',
                order,
            });
        }
        catch (error) {
            res.sendStatus(500);
        }
    });
}
exports.createOrder = createOrder;
