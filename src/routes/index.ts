import { Router } from "express";
import { orderRouter } from "./order.routes";

const routes = Router();

routes.use("/order", orderRouter);

export default routes;