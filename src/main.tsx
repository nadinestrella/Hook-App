import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { CallBackHook } from './06-memos/CallBackHook';

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

    <CallBackHook />
  </StrictMode>
);
