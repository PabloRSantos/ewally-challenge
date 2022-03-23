import { BankTitle } from "./bank-title-entity";

interface SutResponse {
  sut: BankTitle;
}

const makeSut = (): SutResponse => {
  const sut = new BankTitle();

  return { sut };
};

describe("BankTitle Ticket Entity", () => {
  const lineCode = "26090663333539538145823600000006489610000008349";
  it("should be return correct bar code", () => {
    const { sut } = makeSut();

    const result = sut.getBarCode(lineCode);
    expect(result).toBe("26094896100000083490663335395381452360000000");
  });

  it("should be return correct expiration date", () => {
    const { sut } = makeSut();

    const result = sut.getExpirationDate(lineCode);
    expect(result).toBe("2022-04-20");
  });

  it("should be return correct value", () => {
    const { sut } = makeSut();

    const result = sut.getValue(lineCode);
    expect(result).toBe("R$ 83,49");
  });
});
