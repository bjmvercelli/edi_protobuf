import { Request, Response } from "express";
import { CreateOrderService } from "../services/CreateOrderService";
import { Item } from "../proto/types/Item";
import { CreateOrderResponse } from "../proto/types/CreateOrderResponse";
import { Address } from "../proto/types/Address";

type TCreateOrderBody = {
  customer: string;
  items: Item[];
  totalPrice: number;
  address: Address;
  deliveryTime: number;
}
export class CreateOrderController {
  async handle(request: Request, response: Response): Promise<Response<CreateOrderResponse>> {
    try {
      const {
        customer,
        items,
        totalPrice,
        address,
        deliveryTime
      }: TCreateOrderBody = request.body;

      if (!customer || !items || !totalPrice || !address || !deliveryTime) {
        throw new Error("Missing required fields");
      }

      const createOrderService = new CreateOrderService();

      const data = await createOrderService.execute({
        customer,
        items,
        totalPrice,
        address,
        deliveryTime
      });

      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }
}