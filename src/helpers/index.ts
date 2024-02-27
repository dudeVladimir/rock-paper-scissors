function isObject(obj: unknown) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export { isObject, generateRandomNumber };
