import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { Padre } from './07-tarea-memo/Padre';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}

    {/* <CallBackHook /> */}
    <Padre />
  </StrictMode>
);
