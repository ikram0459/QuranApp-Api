import morgan from "morgan";

import { logger } from "./logger";

const stream = {
  write: (message: string) => logger.http(message.substring(0, message.lastIndexOf("\n"))),
};

export const httpLogger = morgan("tiny", { stream: stream });
