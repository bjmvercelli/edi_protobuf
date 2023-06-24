import { Request, Response } from "express";

export class CreateOrderController {
  async handle(request: Request, response: Response): Promise<Response>{
    try {
      return response.status(200).json({ message: "Hello World" });
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }
}