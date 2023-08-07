"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cliente_routes_1 = require("./routes/cliente.routes");
const hadleAppError_middleware_1 = require("./middlewares/hadleAppError.middleware");
const login_routes_1 = require("./routes/login.routes");
const contato_routes_1 = require("./routes/contato.routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
}));
app.use("/cliente", cliente_routes_1.clienteRoutes);
app.use("/login", login_routes_1.loginRoutes);
app.use("/contato", contato_routes_1.contatoRoutes);
app.use(hadleAppError_middleware_1.handleAppError);
// app.get("/", (req, res) => {
//   return res.json("hello world");
// });
exports.default = app;
