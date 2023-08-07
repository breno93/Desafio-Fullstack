"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAppError = void 0;
const AppError_1 = require("../errors/AppError");
const zod_1 = require("zod");
const handleAppError = (error, req, res, _) => {
    if (error instanceof AppError_1.AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }
    if (error instanceof zod_1.ZodError) {
        console.log("Erro AQUI", error);
        return res.status(400).json({
            message: error.flatten().fieldErrors,
        });
    }
    return res.status(500).json({
        message: "internal server error",
    });
};
exports.handleAppError = handleAppError;
