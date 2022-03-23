import { Ticket } from "@/domain/models";

export class TickEntitySpy implements Ticket {
  receivedValue = null;

  value = "any_value";

  barCode = "any_barcode";

  expirationDate = "any_expiration";

  valid = true;

  isValid(): boolean {
    return this.valid;
  }

  getValue(value: string): string {
    this.receivedValue = value;
    return this.value;
  }

  getBarCode(value: string): string {
    this.receivedValue = value;
    return this.barCode;
  }

  getExpirationDate(value: string): string {
    this.receivedValue = value;
    return this.expirationDate;
  }
}
