import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { Memorize } from './06-memos/Memorize';

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

    <Memorize />
  </StrictMode>
);
