export const checkPropertyExists = (obj: Object, key: string) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
