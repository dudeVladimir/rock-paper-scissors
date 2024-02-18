function isObject(obj: unknown) {
  if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null)
    return true;

  return false;
}

function getUrlToImg(path: string) {
  return new URL(path, import.meta.url).href;
}

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export { isObject, getUrlToImg, generateRandomNumber };
