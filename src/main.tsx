import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { CounterApp } from './01-useState/CounterApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HookApp /> */}
    <CounterApp />
  </StrictMode>
);
