import { TickEntitySpy } from "../tests";
import { LoadTicketService } from "./load-ticket-service";

interface SutResponse {
  ticketEntitySpy: TickEntitySpy;
  sut: LoadTicketService;
}

const makeSut = (): SutResponse => {
  const ticketEntitySpy = new TickEntitySpy();
  const sut = new LoadTicketService(ticketEntitySpy);

  return { sut, ticketEntitySpy };
};

describe("LoadTicketService", () => {
  it("should be return correct values", () => {
    const { sut, ticketEntitySpy } = makeSut();

    const code = "123";
    const response = sut.load(code);

    const { barCode, value, receivedValue, expirationDate } = ticketEntitySpy;
    expect(response).toEqual({
      barCode,
      amount: value,
      expirationDate,
    });
    expect(receivedValue).toBe(code);
  });

  it("should be throws if code is invalid", () => {
    const { sut, ticketEntitySpy } = makeSut();
    ticketEntitySpy.valid = false;

    const code = "123";

    expect(() => sut.load(code)).toThrow("Boleto inválido");
  });
});
