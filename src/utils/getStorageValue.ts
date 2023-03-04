export const getStorageValue = (key: string, defaultValue: any) =>
  JSON.parse(localStorage.getItem(key)!) || defaultValue;
