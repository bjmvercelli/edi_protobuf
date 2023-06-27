import { Router } from "express";

import { GetTransportDetailsController } from "../controllers/GetTransportDetailsController";
import { CreateOrderController } from "../controllers/CreateOrderController";
import { CancelOrderController } from "../controllers/CancelOrderController";

const getTransportDetailsController = new GetTransportDetailsController();
const createOrderController = new CreateOrderController();
const cancelOrderController = new CancelOrderController();

const orderRouter = Router();

orderRouter.get("/details", getTransportDetailsController.handle);
orderRouter.post("/create", createOrderController.handle);
orderRouter.patch("/cancel", cancelOrderController.handle);

export { orderRouter };