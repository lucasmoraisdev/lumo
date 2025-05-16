import { timestamp } from "rxjs";

export class ApiResponse {
  static success<T>(data: T) {
    return {
      success: true,
      data,
      timestamp: new Date().toISOString(),
    };
  }


  static error(message: string, statusCode = 500) {
    return {
      success: false,
      message,
      statusCode,
      timestamp: new Date().toISOString(),
    };
  }
}