import { Request, Response } from "express";
import { GetTransportDetailsService } from "../services/GetTransportDetailsService";

export class GetTransportDetailsController {
  handle(request: Request, response: Response){
    try {
      const { address } = request.body;

      const getTransportDetailsService = new GetTransportDetailsService();

      const shipmentResponse = getTransportDetailsService.execute(address);

      return response.status(200).json(shipmentResponse);
    } catch (error) {
      return response.status(400).json({ message: (error as Error).message });
    }
  }
}