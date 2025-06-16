"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const fs_1 = require("fs");
// Ensure logs directory exists
(0, fs_1.mkdirSync)("logs", { recursive: true });
// Create a Winston logger
const logger = (0, winston_1.createLogger)({
    transports: [
        // Console transport for terminal output
        new winston_1.transports.Console(),
        // File transport for writing to winston_example.log
        new winston_1.transports.File({
            dirname: "logs",
            filename: "winston_example.log",
        }),
    ],
    format: winston_1.format.combine(winston_1.format.colorize({ all: true }), // Colorize console output
    winston_1.format.timestamp(), // Add timestamp to logs
    winston_1.format.printf(({ timestamp, level, message, service }) => {
        return `[${timestamp}] ${service || "WinstonExample"} ${level}: ${message}`;
    })),
    defaultMeta: {
        service: "WinstonExample",
    },
});
// Log a message to test
logger.info("Hello world!", { correlationId: "123", userId: "456" });
