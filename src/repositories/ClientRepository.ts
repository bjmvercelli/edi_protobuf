import { PrismaClient } from "@prisma/client";


interface IClientRepository {
  getByEmail: (email: string) => Promise<any>;
}

export class ClientRepository implements IClientRepository {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  async getByEmail(email: string) {
    return await this.client.cliente.findUnique({
      where: {
        email
      },
      include: {
        endereco: true
      }
    });
  }
}