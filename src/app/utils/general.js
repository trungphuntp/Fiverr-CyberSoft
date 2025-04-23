export const splitArrayIntoChuckSize = (arr, chuckSize = 9) => {
  const result = [];
  for (let index = 0; index < arr.length; index += chuckSize) {
    const chuckCode = arr.slice(index, index + chuckSize);
    result.push(chuckCode);
  }
  return result;
};
