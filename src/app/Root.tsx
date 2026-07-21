import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LangProvider } from './context/LangContext';

export const Root = () => {
  return (
    <LangProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
};
