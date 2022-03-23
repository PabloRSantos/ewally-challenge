import { Ticket } from "@/domain/models";
import { moduleEleven, moduleTen } from "@/helpers";

export class BankTitle implements Ticket {
  isValid(value: string): boolean {
    if (value.length !== 47) return false;

    const firstFreeField = value.substring(0, 10);
    const secondFreeField = value.substring(10, 21);
    const thirdFreeField = value.substring(21, 32);

    const barCode = this.getBarCode(value);

    return (
      moduleTen(firstFreeField) &&
      moduleTen(secondFreeField) &&
      moduleTen(thirdFreeField) &&
      moduleEleven(barCode)
    );
  }

  getBarCode(value: string): string {
    const institution = value.substring(0, 3);
    const currency = value.substring(3, 4);
    const firstFreeField = value.substring(4, 9);
    const secondFreeField = value.substring(10, 20);
    const thirdFreeField = value.substring(21, 31);
    const verificationNumber = value.substring(32, 33);
    const expiration = value.substring(33, 37);
    const monetaryValue = value.substring(37, 47);

    let barCode = institution;
    barCode += currency;
    barCode += verificationNumber;
    barCode += expiration;
    barCode += monetaryValue;
    barCode += firstFreeField;
    barCode += secondFreeField;
    barCode += thirdFreeField;

    return barCode;
  }

  getExpirationDate(value: string): string {
    const extractedValue = value.substring(33, 37);
    const baseDate = new Date(1997, 9, 7);

    baseDate.setDate(baseDate.getDate() + Number(extractedValue));

    const formattedDate = baseDate.toISOString().split("T")[0];
    return formattedDate;
  }

  getValue(value: string): string {
    const extractedValue = `${value.substring(37, 45)}.${value.substring(
      45,
      47
    )}`;

    const formattedValue = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(extractedValue));

    return formattedValue;
  }
}
