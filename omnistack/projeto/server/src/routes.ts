import express from "express";
import db from "./database/connection";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

// corpo (request body): dados para a criação ou atualização de um registro
// request.body
// route params: identificar qual recurso eu quero atualizar ou deletar
// request.params
// query params: paginação, filtros, ordenação
// request.query
/**
routes.get("/", (request, response) => {
  return response.json({ message: "hello world" });
});
 */

export default routes;
