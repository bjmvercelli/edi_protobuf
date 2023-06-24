import { GrpcClient } from "../infra/grpc/client";

interface IGetTransportDetailsService {
	execute: () => Promise<any>;
}

export class GetTransportDetailsService implements IGetTransportDetailsService {
	private client: GrpcClient;

	constructor() {
		this.client = new GrpcClient('localhost:50051');
	}

	async execute() {
		return { message: "Hello World" };
	}
}