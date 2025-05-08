"use strict";
// console.log('Hello, TypeScript Node.js project!');
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    transports: [new winston_1.transports.Console()],
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level}: ${message}`;
    })),
});
logger.info("hello world");
//save in file
const logger2 = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.File({
            dirname: "logs",
            filename: "winston_example.log",
        }),
    ],
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message, service }) => {
        return `[${timestamp}] ${service} ${level}: ${message}`;
    })),
    defaultMeta: {
        service: "WinstonExample",
    },
});
