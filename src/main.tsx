import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    <MultipleCustomHooks />
  </StrictMode>
);
