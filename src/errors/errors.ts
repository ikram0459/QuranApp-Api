export class BaseError extends Error {
  public readonly name: string;
  public readonly httpCode: number;
  public readonly isOperational: boolean;

  constructor(name: string, httpCode: number, description: string, isOperational: boolean) {
    super(description);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

export class HTTP400Error extends BaseError {
  constructor(description = "bad request") {
    super("BAD REQUEST", 400, description, true);
  }
}

export class HTTP404Error extends BaseError {
  constructor(description = "not found") {
    super("NOT FOUND", 404, description, true);
  }
}

export class HTTP500Error extends BaseError {
  constructor(description = "internal server error") {
    super("INTERNAL SERVER ERROR", 500, description, true);
  }
}
