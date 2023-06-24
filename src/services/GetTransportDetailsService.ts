

interface IGetTransportDetailsService {
	execute: () => Promise<any>;
}

export class GetTransportDetailsService implements IGetTransportDetailsService {
	async execute() {
		return { message: "Hello World" };
	}
}