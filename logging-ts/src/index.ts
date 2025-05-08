// console.log('Hello, TypeScript Node.js project!');

import { createLogger, transports, format } from "winston";

const logger = createLogger({
  transports: [new transports.Console()], 
  format: format.combine(
    format.colorize(), 
    format.timestamp(),
    format.printf(({timestamp, level, message}) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
});

logger.info("hello world");

//save in file
const logger2 = createLogger({
  transports: [
    new transports.File({
      dirname: "logs",
      filename: "winston_example.log",
    }),
    new transports.Console(), // Add console transport
  ],
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message, service }) => {
      return `[${timestamp}] ${service} ${level}: ${message}`;
    })
  ),
  defaultMeta: {
    service: "WinstonExample",
  },
});