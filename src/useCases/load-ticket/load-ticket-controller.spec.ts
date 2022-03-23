import { AppError } from "@/helpers";
import { LoadTicketServiceSpy } from "../tests";
import { LoadTicketController } from "./load-ticket-controller";

interface SutResponse {
  ticketServiceSpy: LoadTicketServiceSpy;
  sut: LoadTicketController;
}

const makeSut = (): SutResponse => {
  const ticketServiceSpy = new LoadTicketServiceSpy();
  const sut = new LoadTicketController(ticketServiceSpy);

  return { sut, ticketServiceSpy };
};

describe("LoadTicketController", () => {
  it("should be throw bad request error if code is invalid", async () => {
    const { sut } = makeSut();

    const request = {
      params: {
        code: "invalid_code",
      },
    };
    const response = sut.handle(request);

    await expect(response).rejects.toEqual(
      new AppError("O código do boleto deve conter somente números", 400)
    );
  });

  it("should be throw bad request error if code length is invalid", async () => {
    const { sut } = makeSut();

    const request = {
      params: {
        code: "123",
      },
    };
    const response = sut.handle(request);

    await expect(response).rejects.toEqual(
      new AppError(
        "O código tem tamanho inválido. Tamanho esperado: 47 ou  48 caractres",
        400
      )
    );
  });

  it("should be call load ticket service with correct values", async () => {
    const { sut, ticketServiceSpy } = makeSut();

    const request = {
      params: {
        code: "836200000021292600481009143530930013001904210760",
      },
    };

    await sut.handle(request);

    expect(ticketServiceSpy).toHaveProperty("params", request.params.code);
  });

  it("should be return the correct response", async () => {
    const { sut, ticketServiceSpy } = makeSut();

    const request = {
      params: {
        code: "836200000021292600481009143530930013001904210760",
      },
    };

    const response = await sut.handle(request);
    expect(response).toEqual({
      body: ticketServiceSpy.response,
      statusCode: 200,
    });
  });
});
