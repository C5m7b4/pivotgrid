export const arrSum = (arr, lookupField, lookupValue, valueField) => {
  return arr.reduce((acc, cur) => {
    if (cur[lookupField] === lookupValue) {
      return acc + Number(cur[valueField]);
    } else {
      return acc;
    }
  }, 0);
};

export const arrCount = (arr, lookupField, lookupValue) => {
  return arr.reduce((acc, cur) => {
    if (cur[lookupField] === lookupValue) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
};

export const arrAvg = (arr, lookupField, lookupValue, valueField) => {
  let itemCount = 0;
  const total = arr.reduce((acc, cur) => {
    if (cur[lookupField] === lookupValue) {
      itemCount++;
      return acc + Number(cur[valueField]);
    } else {
      return acc;
    }
  }, 0);
  return total / itemCount;
};
