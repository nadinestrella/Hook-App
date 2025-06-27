import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { SimpleForm } from './02-useEffect/SimpleForm';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    <SimpleForm />
  </StrictMode>
);
