import { AppError } from "@/helpers";
import { Controller, HttpRequest } from "@/protocols";
import { Request, Response } from "express";

export const adaptRoute = (
  makeController: (req: HttpRequest) => Controller
) => {
  return async (req: Request, res: Response) => {
    try {
      const httpRequest: HttpRequest = {
        params: req.params,
      };

      const controller = makeController(httpRequest);
      const httpResponse = await controller.handle(httpRequest);

      return res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (error) {
      if (error instanceof AppError)
        return res.status(error.statusCode).json({ error: error.message });
    }
  };
};
