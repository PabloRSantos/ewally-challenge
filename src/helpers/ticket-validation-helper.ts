export const moduleTen = (value: string) => {
  const verificationCode = Number(value[value.length - 1]);
  const valueWithoutCode = value.substring(0, value.length - 1);

  const sum = valueWithoutCode
    .split("")
    .reverse()
    .reduce((total, currentValue, index) => {
      let result = 0;
      if (index % 2 === 0) {
        result = Number(currentValue) * 2;
      } else {
        result = Number(currentValue) * 1;
      }

      if (result > 9) {
        const [firstDigit, secondDigit] = String(result);
        return total + Number(firstDigit) + Number(secondDigit);
      }

      return total + result;
    }, 0);

  const rest = sum % 10;
  let result = 10 - rest;

  if (result === 10) {
    result = 0;
  }

  const isValid = verificationCode === result;

  return isValid;
};

export const moduleEleven = (value: string) => {
  let count = 2;
  const codeBarFormatted = value.substring(0, 4) + value.substring(5, 44);
  const DV = Number(value[4]);
  const codeBarSum = codeBarFormatted
    .split("")
    .reverse()
    .reduce((total, currentValue) => {
      const result = total + Number(currentValue) * count;
      count = count === 9 ? 2 : count++;

      return result;
    }, 0);

  const rest = codeBarSum % 11;
  let verificationNumber = 11 - rest;

  const exceptionValues = [0, 10, 11];
  if (exceptionValues.includes(verificationNumber)) verificationNumber = 1;

  const isValid = DV === verificationNumber;

  return isValid;
};
