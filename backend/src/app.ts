import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { clienteRoutes } from "./routes/cliente.routes";
import { handleAppError } from "./middlewares/hadleAppError.middleware";
import { loginRoutes } from "./routes/login.routes";
import { contatoRoutes } from "./routes/contato.routes";

const app = express();

app.use(express.json());
app.use("/cliente", clienteRoutes);
app.use("/login", loginRoutes);
app.use("/contato", contatoRoutes);
app.use(handleAppError);

// app.get("/", (req, res) => {
//   return res.json("hello world");
// });

export default app;
