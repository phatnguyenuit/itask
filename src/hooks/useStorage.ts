import { useState, useCallback, useEffect } from 'react';

import StorageService from 'services/StorageService';
import storageService from 'services/storage';

const createStorageHook = (storageService: StorageService) => {
  const useStorage = <TValue>(
    storageKey: string,
    initialData: TValue | null = null,
  ) => {
    const [data, setData] = useState(
      () => storageService.getItem<TValue>(storageKey) ?? initialData,
    );

    const updateStorageData = useCallback(
      (newData: TValue | null) => {
        storageService.setItem(storageKey, newData);
      },
      [storageKey],
    );

    useEffect(() => {
      const storageData = storageService.getItem(storageKey);

      if (
        initialData !== undefined &&
        initialData !== null &&
        storageData === null
      ) {
        storageService.setItem(storageKey, initialData);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storageKey]);

    useEffect(() => {
      const unsubscribe = storageService.subscribe(
        ({ key, newValue, storageArea }) => {
          if (storageArea === storageService.storage && key === storageKey) {
            setData(storageService.deserialize<TValue>(newValue));
          }
        },
      );

      return unsubscribe;
    }, [storageKey]);

    return [data, updateStorageData] as const;
  };

  return useStorage;
};

const useStorage = createStorageHook(storageService);
export default useStorage;
