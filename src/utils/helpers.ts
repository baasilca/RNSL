export function isAmount(str: any) {
  if (typeof str !== 'string') {
    return false;
  }
  return /^[0-9]{0,7}(\.[0-9]{0,2})?$/.test(str);
}

export function makeRandom(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
