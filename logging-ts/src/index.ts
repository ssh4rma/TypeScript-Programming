import { createLogger, transports, format } from "winston";
import { mkdirSync } from "fs";

mkdirSync("logs", { recursive: true });

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      dirname: "logs",
      filename: "winston_example.log",
    }),
  ],
  format: format.combine(
    format.colorize({ all: true }), 
    format.timestamp(), 
    format.printf(({ timestamp, level, message, service }) => {
      return `[${timestamp}] ${service || "WinstonExample"} ${level}: ${message}`;
    })
  ),
  defaultMeta: {
    service: "WinstonExample",
  },
});

logger.info("Hello world!", { correlationId: "123", userId: "456" });