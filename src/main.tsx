import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import './08-useReducer/intro-reducer';

import './index.css';
import { TodoApp } from './08-useReducer/TodoApp';

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
    {/* <Padre /> */}
    <TodoApp />
  </StrictMode>
);
