"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const node_http_1 = __importDefault(require("node:http"));
const node_path_1 = __importDefault(require("node:path"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const dotEnvConfig = (0, dotenv_1.config)();
const server = node_http_1.default.createServer(app);
exports.io = new socket_io_1.Server(server);
mongoose_1.default
    .connect(`${process.env.MONGOOSE_URL}`)
    .then(() => {
    const PORT = process.env.PORT || 8080;
    // Configurando os Cors da aplicação
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
    });
    app.use('/uploads', express_1.default.static(node_path_1.default.resolve(__dirname, '..', 'uploads')));
    app.use(express_1.default.json());
    app.use(routes_1.router);
    server.listen(PORT, () => console.log(`🚀... server is running on http://localhost:${PORT}`));
})
    .catch((error) => console.log('Erro:', error));
