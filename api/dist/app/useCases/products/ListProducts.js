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
exports.listProducts = void 0;
const Products_1 = require("../../models/Products");
function listProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Usando o método find no modelo de Product para obter todos os produtos do banco de dados.
            const products = yield Products_1.Product.find();
            // Envio dos produtos ao cliente.
            res.json(products);
        }
        catch (error) {
            // Enviando um código de status de 500 para o cliente.
            res.sendStatus(500);
        }
    });
}
exports.listProducts = listProducts;
