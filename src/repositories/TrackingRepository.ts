import { PrismaClient, status_type } from "@prisma/client";

interface ITrackingRepository {
  updateStatus(trackingCode: string, status: string): Promise<void>;
}

export class TrackingRepository implements ITrackingRepository {
  private client: PrismaClient['rastreio'];

  constructor() {
    this.client = new PrismaClient().rastreio;
  }

  async updateStatus(trackingCode: string, status: status_type): Promise<void> {
    await this.client.updateMany({
      where: {
        codigo_rastreio: trackingCode
      },
      data: {
        status: status_type[status]
      }
    });
  }
}