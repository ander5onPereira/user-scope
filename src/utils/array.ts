export function addIfNotExists<T>(array: T[], item: T): T[] {
  if (!array.includes(item)) {
    return [...array, item];
  }
  return array;
}
export function removeItem<T>(array: T[], item: T): T[] {
  return array.filter((i) => i !== item);
}