import { TicketResponse } from "@/domain/models";
import { LoadTicket } from "@/domain/usecases";

export class LoadTicketServiceSpy implements LoadTicket {
  response: TicketResponse = {
    barCode: "any_barcode",
    amount: "any_amount",
    expirationDate: "any_expiration",
  };

  params = null;

  load(code: string): TicketResponse {
    this.params = code;
    return this.response;
  }
}
