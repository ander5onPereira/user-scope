import { useState } from 'react';

export function useLocalStorage<T>(key: string) {
  const [storage, setStorage] = useState<T | undefined>(() => {
    if (typeof window === 'undefined') return undefined;
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : undefined;
  });

  function setValueAndStore(newValue: T) {
    setStorage(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return {
    storage: storage || [],
    setValue: (newValue: T) => setValueAndStore(newValue),
  };
}
