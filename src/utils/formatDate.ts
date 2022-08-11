const padTo2Digits = (num: number): string => {
  return num.toString().padStart(2, '0');
};

export const formatDate = (date: number): string => {
  const convert = new Date(date);
  return [
    padTo2Digits(convert.getDate()),
    padTo2Digits(convert.getMonth() + 1),
    convert.getFullYear().toString().slice(-2),
  ].join('/');
};
