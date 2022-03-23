import { Ticket } from "@/domain/models";

export class Dearleship implements Ticket {
  isValid(): boolean {
    return true;
  }

  getBarCode(value: string): string {
    const firstSlice = value.slice(0, 11);
    const secondSlice = value.slice(12, 23);
    const thirdSlice = value.slice(24, 35);
    const fourthSlice = value.slice(36, 47);

    let barCode = firstSlice;
    barCode += secondSlice;
    barCode += thirdSlice;
    barCode += fourthSlice;

    return barCode;
  }

  getExpirationDate(value: string): string {
    const barCode = this.getBarCode(value);
    const extractedYear = Number(barCode.substring(23, 27));
    const extractedMonth = Number(barCode.substring(27, 29));
    const extractedDay = Number(barCode.substring(29, 31));

    const expirationDate = new Date(
      extractedYear,
      extractedMonth - 1,
      extractedDay
    );

    const formattedDate = expirationDate.toISOString().split("T")[0];

    const diffDates = expirationDate.getFullYear() - new Date().getFullYear();

    return diffDates < 100 ? formattedDate : null;
  }

  getValue(value: string): string {
    const extractedValue = `${value.substring(4, 13)}.${value.substring(
      13,
      15
    )}`;

    const formattedValue = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(extractedValue));

    return formattedValue;
  }
}
