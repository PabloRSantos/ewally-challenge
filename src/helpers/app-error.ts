export class AppError extends Error {
  message: string;

  statusCode: number;

  constructor(message: string, statusCode = 500) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
