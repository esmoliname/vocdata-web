import React from 'react';
import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Quality } from './pages/Quality';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

// Simple 404 component
const NotFound = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "quality", Component: Quality },
      { path: "about", Component: About },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
