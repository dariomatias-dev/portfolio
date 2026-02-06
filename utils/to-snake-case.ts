export const toSnakeCase = (value: string) =>
  value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
