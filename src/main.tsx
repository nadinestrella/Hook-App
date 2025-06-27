import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    <FormWithCustomHook />
  </StrictMode>
);
