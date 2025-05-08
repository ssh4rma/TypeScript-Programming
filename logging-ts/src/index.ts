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