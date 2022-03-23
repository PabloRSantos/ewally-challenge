import { Dearleship } from "./dealership-entity";

interface SutResponse {
  sut: Dearleship;
}

const makeSut = (): SutResponse => {
  const sut = new Dearleship();

  return { sut };
};

describe("Dealership Ticket Entity", () => {
  const lineCode = "836200000021292600481009143530930013001904210760";
  it("should be return correct bar code", () => {
    const { sut } = makeSut();

    const result = sut.getBarCode(lineCode);
    expect(result).toBe("83620000002292600481001435309300100190421076");
  });

  it("should be return correct expiration date", () => {
    const { sut } = makeSut();

    const result = sut.getExpirationDate(lineCode);
    expect(result).toBeNull();
  });

  it("should be return correct value", () => {
    const { sut } = makeSut();

    const result = sut.getValue(lineCode);
    expect(result).toBe("R$ 212,92");
  });
});
