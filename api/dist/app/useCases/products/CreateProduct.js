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
exports.createProduct = void 0;
const Products_1 = require("../../models/Products");
function createProduct(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /*
             * Usando o operador de encadeamento opcional para verificar se o req.file existe e, se existir, obterá
             * o nome do arquivo.
             */
            const imagePath = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            // Desestruturando um objeto do req.body.
            const { name, description, price, category, ingredients } = req.body;
            // Criando um novo produto.
            const product = yield Products_1.Product.create({
                name,
                description,
                price: Number(price),
                category,
                imagePath,
                ingredients: ingredients ? JSON.parse(ingredients) : [],
            });
            // Enviando uma resposta ao cliente com um código de status 201 e uma mensagem, de produto criado.
            res.status(201).json({
                message: 'Product has been created!',
                product,
            });
        }
        catch (error) {
            // Enviando uma resposta ao cliente com um código de status 500 e uma mensagem, Internal Server Error.
            res.sendStatus(500);
        }
    });
}
exports.createProduct = createProduct;
