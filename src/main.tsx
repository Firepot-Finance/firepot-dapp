import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import YieldVaultDetails from './features/YieldVaultDetails/components/yieldVaultDetails.tsx';
import ConnectWalletConfig from './features/ConnectWallet';
import Header from './components/Header/index.tsx';
import Dashboard from './pages/dashboard.tsx';
import Welcome from './pages/welcome.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Dashboard />
      </>
    ),
  },
  {
    path: '/opportunities/:id',
    element: <YieldVaultDetails />,
  },
  {
    path: 'core',
    element: <Welcome />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConnectWalletConfig>
      <RouterProvider router={router} />
    </ConnectWalletConfig>
  </React.StrictMode>,
);
