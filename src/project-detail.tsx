import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProjectDetailPage from './ProjectDetailPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectDetailPage />
  </StrictMode>
);
