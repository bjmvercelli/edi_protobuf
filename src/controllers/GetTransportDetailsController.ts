import { Request, Response } from "express";
import { GetTransportDetailsService } from "../services/GetTransportDetailsService";
import { ShippingRequest } from "../proto/types/ShippingRequest";

export class GetTransportDetailsController {
  async handle(request: Request, response: Response){
    try {
      const { cep, street, number, complement, city, district } = request.query as any;

      if (!cep || !street || !number || !city || !district) {
        throw new Error("Missing required fields");
      }

      const payload: ShippingRequest  = {
        shippingAddress: {
          cep,
          street,
          number,
          complement,
          city,
          district,
        },
        items: [
          {
            name: "Item 1",
            quantity: 1,
            unitPrice: 10.00,
          }
        ]
      }

      const getTransportDetailsService = new GetTransportDetailsService();

      const shipmentResponse = await getTransportDetailsService.execute(payload);

      return response.status(200).json(shipmentResponse);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }
}