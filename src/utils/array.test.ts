import { describe, it, expect } from 'vitest';
import { addIfNotExists, removeItem } from './array';


describe('array Utility', () => {
  it('adds an item if it does not exist', () => {
    const array = [1, 2, 3];
    const result = addIfNotExists(array, 4);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('does not add an item if it already exists', () => {
    const array = [1, 2, 3];
    const result = addIfNotExists(array, 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('removes an item from the array', () => {
    const array = [1, 2, 3];
    const result = removeItem(array, 2);
    expect(result).toEqual([1, 3]);
  });
});