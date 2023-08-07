"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const ensureAuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }
    const splitedToken = token.split(" ")[1];
    jsonwebtoken_1.default.verify(splitedToken, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: "invalid token",
            });
        }
        res.locals.userId = decoded.sub;
        return next();
    });
};
exports.ensureAuthMiddleware = ensureAuthMiddleware;
