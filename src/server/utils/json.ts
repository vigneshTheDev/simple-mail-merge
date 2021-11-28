export function tryStringify(data: any) {
  try {
    return JSON.stringify(data);
  } catch (ex) {
    return null;
  }
}

export function tryParse(stringifiedData: string) {
  try {
    return JSON.parse(stringifiedData);
  } catch (ex) {
    return null;
  }
}
