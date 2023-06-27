import { Request, Response } from "express";
import { CancelOrderService } from "../services/CancelOrderService";

export class CancelOrderController {
  async handle(request: Request, response: Response){
    try {
      const { orderId } = request.query;

      if (!orderId) {
        throw new Error('Order id is required');
      }

      const cancelOrderService = new CancelOrderService();

      await cancelOrderService.execute(Number(orderId));

      return response.status(204).json({ message: "Order canceled" });
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }
}