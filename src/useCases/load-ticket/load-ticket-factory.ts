import { BankTitle, Dearleship } from "@/entities";
import { Controller, HttpRequest } from "@/protocols";

import { LoadTicketController } from "./load-ticket-controller";
import { LoadTicketService } from "./load-ticket-service";

export const makeLoadTicketController = (req: HttpRequest): Controller => {
  const ticketEntity =
    req.params.code.length === 47 ? new BankTitle() : new Dearleship();

  const loadTicketService = new LoadTicketService(ticketEntity);
  return new LoadTicketController(loadTicketService);
};
