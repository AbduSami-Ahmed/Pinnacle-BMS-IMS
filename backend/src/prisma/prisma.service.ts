import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    // When a PostgreSQL server is running, connect:
    try {
      await this.$connect();
    } catch {
      // Allow NestJS server to boot in development mode even if local DB is not yet started
      console.warn("⚠️ [PrismaService] PostgreSQL not connected. Verify DATABASE_URL in backend/.env when running database queries.");
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
