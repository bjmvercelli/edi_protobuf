import { Router } from "express";

import { GetTransportDetailsController } from "../controllers/GetTransportDetailsController";
import { CreateOrderController } from "../controllers/CreateOrderController";

const getTransportDetailsController = new GetTransportDetailsController();
const createOrderController = new CreateOrderController();

const orderRouter = Router();

orderRouter.get("/details", getTransportDetailsController.handle);
orderRouter.post("/create", createOrderController.handle);

export { orderRouter };