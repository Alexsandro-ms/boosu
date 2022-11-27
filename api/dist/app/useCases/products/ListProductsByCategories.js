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
exports.listProductsByCategories = void 0;
const Products_1 = require("../../models/Products");
function listProductsByCategories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const products = yield Products_1.Product.find().where('category').equals(categoryId);
            // Enviando os produtos via json para o cliente
            res.json(products);
        }
        catch (error) {
            res.sendStatus(500);
        }
    });
}
exports.listProductsByCategories = listProductsByCategories;
