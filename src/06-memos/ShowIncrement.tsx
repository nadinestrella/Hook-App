import React from 'react';

interface Props {
  increment: () => void;
}

export const ShowIncrement = React.memo(({ increment }: Props) => {
  console.log('me volvi a generar');
  return (
    <button
      onClick={() => {
        increment();
      }}
      className="btn btn-primary"
    >
      Incrementar
    </button>
  );
});
