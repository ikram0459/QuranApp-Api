import { Request, Response, NextFunction } from "express";

import { logger } from "../config/logger";
import { BaseError } from "../errors/errors";

class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    logger.error("ERROR", err);
  }

  public isTrustedError(error: Error) {
    return error instanceof BaseError ? error.isOperational : false;
  }
}

export const errorHandler = new ErrorHandler();

export const errorHandlerMiddleware = () => (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err);

  if (err instanceof BaseError) {
    if (errorHandler.isTrustedError(err)) {
      res.status(err.httpCode).json({ resource: req.path, status: err.httpCode, error: err.message });
      return;
    }
  }

  errorHandler.handleError(err);
  next(err);
};
