import React from 'react';

interface Props {
  value: number;
}

export const Small = React.memo(({ value }: Props) => {
  console.log('Me volvi a dibujar');
  return <small>{value}</small>;
});
