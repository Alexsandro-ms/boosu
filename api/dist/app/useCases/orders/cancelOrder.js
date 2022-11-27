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
exports.cancelOrder = void 0;
const Order_1 = require("../../models/Order");
function cancelOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /* Recebendo orderID dos parâmetros de
             *  solicitação e, em seguida, excluindo o pedido com esse id.
             */
            const { orderId } = req.params;
            yield Order_1.Order.findByIdAndDelete(orderId);
            // Enviando uma resposta sem conteúdo.
            res.sendStatus(204);
        }
        catch (error) {
            // Enviando uma resposta com o código de status 500.
            res.sendStatus(500);
        }
    });
}
exports.cancelOrder = cancelOrder;
