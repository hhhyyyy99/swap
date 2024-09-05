'use client';
import React from 'react';
import { type FC, type PropsWithChildren } from 'react';
import { EVMProvider } from './EVMProvider';
// import { SolanaProvider } from './SolanaProvider';

export const WalletProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
      <EVMProvider>{children}</EVMProvider>
  );
};
