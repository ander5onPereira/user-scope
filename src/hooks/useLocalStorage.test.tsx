import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';
import { describe, it, expect } from 'vitest';

describe('useLocalStorage Hook', () => {
  it('should initialize with the correct value', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'));
    const { result } = renderHook(() => useLocalStorage<string>('testKey'));
    expect(result.current.storage).toBe('testValue');
  });

  it('should update the value in localStorage', () => {
    const { result } = renderHook(() => useLocalStorage<string>('testKey'));
    act(() => {
      result.current.setValue('newValue');
    });
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('newValue'));
  });
});
