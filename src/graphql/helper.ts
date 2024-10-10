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