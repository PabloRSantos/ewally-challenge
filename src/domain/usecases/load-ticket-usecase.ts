import { TicketResponse } from "../models";

export interface LoadTicket {
  load(code: string): TicketResponse;
}
