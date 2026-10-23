import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Cross-Origin Resource Sharing for the Next.js frontend
  app.enableCors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      process.env.FRONTEND_URL || "",
    ].filter(Boolean),
    credentials: true,
  });

  const port = process.env.PORT || 5000;
  await app.listen(port);

  console.log(`\n======================================================`);
  console.log(`🚗 Auto Parts Hub — NestJS REST API Server Running`);
  console.log(`📡 Local API:  http://localhost:${port}/api/v1`);
  console.log(`🩺 Health API: http://localhost:${port}/api/v1/health`);
  console.log(`📊 Summary:   http://localhost:${port}/api/v1/summary`);
  console.log(`======================================================\n`);
}

bootstrap();
