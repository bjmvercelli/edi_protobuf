import { GrpcClient } from "../infra/grpc/client";
import { Address } from "../proto/types/Address";
import { ShipmentResponse } from "../proto/types/ShipmentResponse";

interface IGetTransportDetailsService {
	execute: (address: Address) => ShipmentResponse;
}

export class GetTransportDetailsService implements IGetTransportDetailsService {
	private client: GrpcClient;

	constructor() {
		this.client = new GrpcClient('localhost:50051');
	}

	execute(address: Address): ShipmentResponse {
		const response = this.client.shipmentInfo(address);

		return response;
	}
}