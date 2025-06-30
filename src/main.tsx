import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { Layout } from './05-useLayoutEffect/Layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}

    <Layout />
  </StrictMode>
);
