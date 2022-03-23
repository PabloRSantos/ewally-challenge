export interface Ticket {
  getValue: (value: string) => string;
  getBarCode: (value: string) => string;
  getExpirationDate: (value: string) => string;
  isValid: (value: string) => boolean;
}

export interface TicketResponse {
  amount: string;
  expirationDate: string;
  barCode: string;
}
