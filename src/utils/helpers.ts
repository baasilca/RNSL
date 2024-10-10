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

export function objToString(obj:any):string {
  const result :any= {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      result[key] = objToString(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return `{ ${Object.keys(result).map(key => `${key}: ${typeof result[key] === 'object' ? objToString(result[key]) : result[key]}`).join(', ')} }`;
}
