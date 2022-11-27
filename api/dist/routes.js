"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const node_path_1 = __importDefault(require("node:path"));
const multer_1 = __importDefault(require("multer"));
// Categorias
const CreateCategories_1 = require("./app/useCases/categories/CreateCategories");
const ListCategories_1 = require("./app/useCases/categories/ListCategories");
// Produtos
const CreateProduct_1 = require("./app/useCases/products/CreateProduct");
const ListProducts_1 = require("./app/useCases/products/ListProducts");
const ListProductsByCategories_1 = require("./app/useCases/products/ListProductsByCategories");
// Ordens
const cancelOrder_1 = require("./app/useCases/orders/cancelOrder");
const changeOrderStatus_1 = require("./app/useCases/orders/changeOrderStatus");
const createOrder_1 = require("./app/useCases/orders/createOrder");
const listOrders_1 = require("./app/useCases/orders/listOrders");
exports.router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        // Associando a uma pasta com nome de uploads
        destination(req, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        // Criando um nome exclusivo para cada arquivo.
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});
// Rota para listar categorias.
exports.router.get('/categories', ListCategories_1.listCategories);
// Rota de criação de categorias.
exports.router.post('/categories', CreateCategories_1.createCategories);
// Rota para listar produtos.
exports.router.get('/products', ListProducts_1.listProducts);
// Rota para criar produtos.
exports.router.post('/products', upload.single('image'), CreateProduct_1.createProduct);
// Rota para receber produtos por categoria.
exports.router.get('/categories/:categoryId/products', ListProductsByCategories_1.listProductsByCategories);
// Rota de listagem de pedidos.
exports.router.get('/orders', listOrders_1.listOrders);
// Rota para criar pedidos.
exports.router.post('/orders', createOrder_1.createOrder);
// Rota para mudar o status do pedido.
exports.router.patch('/orders/:orderId', changeOrderStatus_1.changeOrderStatus);
// Rota para cancler / deletar pedido.
exports.router.delete('/orders/:orderId', cancelOrder_1.cancelOrder);
