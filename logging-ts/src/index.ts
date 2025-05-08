// // console.log('Hello, TypeScript Node.js project!');

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

//Stream
import { createWriteStream } from "fs";
import { timeStamp } from "console";

const logger3 = createLogger({
  transports: [
    new transports.Stream({
      stream: createWriteStream("hello.txt"),
    }),
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

//colorize transport
const logger4 = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, metadata }) => {
          return `[${timestamp}] ${level}: ${message}. ${JSON.stringify(
            metadata
          )}`;
        })
      ),
    }),
    new transports.File({
      dirname: "logs",
      filename: "winston_example.log",
      format: format.combine(format.json()),
    }),
  ],
  format: format.combine(format.metadata(), format.timestamp()),
});

logger.info("Hello world!", { correlationId: "123", userId: "456 " });
