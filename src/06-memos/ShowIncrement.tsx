import React from 'react';

interface Props {
  increment: (value: number) => void;
}

export const ShowIncrement = React.memo(({ increment }: Props) => {
  console.log('me volvi a generar');
  return (
    <button
      onClick={() => {
        increment(5);
      }}
      className="btn btn-primary"
    >
      Incrementar
    </button>
  );
});
