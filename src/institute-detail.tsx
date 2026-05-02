import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import InstituteDetailPage from './InstituteDetailPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InstituteDetailPage />
  </StrictMode>
);
