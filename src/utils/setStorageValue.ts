export const setStorageValue = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));
