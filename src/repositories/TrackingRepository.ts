import { PrismaClient, status_type } from "@prisma/client";
import { prisma } from "../infra/db/prisma";

interface ITrackingRepository {
  updateStatus(trackingCode: string, status: string): Promise<void>;
}

export class TrackingRepository implements ITrackingRepository {
  private client: PrismaClient;

  constructor() {
    this.client = prisma;
  }

  async updateStatus(trackingCode: string, status: status_type): Promise<void> {
    await this.client.rastreio.updateMany({
      where: {
        codigo_rastreio: trackingCode
      },
      data: {
        status: status_type[status]
      }
    });
  }
}