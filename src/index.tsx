import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Basket from './pages/basket/basket';
import Catalog from './pages/catalog/catalog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Catalog />,
      },
      {
        path: '/basket',
        element: <Basket />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
