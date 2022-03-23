import { Ticket, TicketResponse } from "@/domain/models";
import { LoadTicket } from "@/domain/usecases";
import { AppError } from "@/helpers";

export class LoadTicketService implements LoadTicket {
  constructor(private readonly ticketEntity: Ticket) {}

  load(code: string): TicketResponse {
    const isValid = this.ticketEntity.isValid(code);

    if (!isValid) {
      throw new AppError("Boleto inválido", 400);
    }

    const value = this.ticketEntity.getValue(code);
    const expiration = this.ticketEntity.getExpirationDate(code);
    const barCode = this.ticketEntity.getBarCode(code);

    return {
      barCode,
      amount: value,
      expirationDate: expiration,
    };
  }
}
