import { GrpcClient } from "../infra/grpc/client";

import { ShippingRequest } from "../proto/types/ShippingRequest";
import { ShippingResponse } from "../proto/types/ShippingResponse";
import { OrderRepository } from "../repositories/OrderRepository";

interface IGetTransportDetailsService {
	execute: (payload: ShippingRequest) => Promise<ShippingResponse>;
}

export class GetTransportDetailsService implements IGetTransportDetailsService {
	private client: GrpcClient;

	constructor() {
		this.client = new GrpcClient('localhost:50051');
	}

	async execute(payload: ShippingRequest): Promise<ShippingResponse> {
		return await this.client.shipmentInfo(payload);
	}
}