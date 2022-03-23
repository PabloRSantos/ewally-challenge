import { LoadTicket } from "@/domain/usecases";
import { AppError } from "@/helpers";
import { Controller, HttpRequest, HttpResponse } from "@/protocols";

export class LoadTicketController implements Controller {
  constructor(private readonly loadTicketService: LoadTicket) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { code } = httpRequest.params;

    if (!/^[0-9]*$/.test(code)) {
      throw new AppError("O código do boleto deve conter somente números", 400);
    }

    const expectedLength = [47, 48];
    if (!expectedLength.includes(code.length)) {
      throw new AppError(
        "O código tem tamanho inválido. Tamanho esperado: 47 ou  48 caractres",
        400
      );
    }

    const response = this.loadTicketService.load(code);

    return {
      body: response,
      statusCode: 200,
    };
  }
}
