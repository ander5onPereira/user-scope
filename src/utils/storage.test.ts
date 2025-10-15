import { describe, it, expect } from 'vitest';
import { storage } from './storage';

describe('storage Utility', () => {
  it('sets and gets a value correctly', () => {
    storage.set('testKey', 'testValue');
    const value = storage.get('testKey');
    expect(value).toBe('testValue');
  });

  it('removes a value correctly', () => {
    storage.set('testKey', 'testValue');
    storage.remove('testKey');
    const value = storage.get('testKey');
    expect(value).toBeNull();
  });
});