import React from 'react';
import Header from '../Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
    </main>
  );
};
export default Layout;
