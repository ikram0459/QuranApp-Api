import { createLogger, transports, format } from "winston";

export const logger = createLogger({
  level: "silly",
  format: format.combine(
    format.timestamp(),
    format.colorize({ all: true }),
    format.splat(),
    format.ms(),
    format.padLevels(),
    format.printf((info) => {
      const { timestamp, level, message, ...args } = info;

      return `${timestamp} ${level}: ${message} ${args.ms} ${JSON.stringify(args)}`;
    })
  ),
  transports: [new transports.Console()],
});
