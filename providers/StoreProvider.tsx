'use client';

import { AppStore, createStore } from '@/lib/store/store';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
