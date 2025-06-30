import { useLayoutEffect, useRef, useState } from 'react';

interface Pokemon {
  name: string;
  id: number;
  sprites: string[];
}

export const PokemonCard = ({ id, name, sprites = [] }: Pokemon) => {
  const h2ref = useRef<HTMLInputElement>(null);

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const rect = h2ref.current?.getBoundingClientRect();
    if (!rect) return;

    const { height, width } = rect;
    setBoxSize({ height, width });
  }, [name]);

  return (
    <section style={{ height: 200, display: 'flex', flexDirection: 'row' }}>
      <h2 ref={h2ref} className="text-capitalize">
        {' '}
        {id} - {name}
      </h2>

      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>

      <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  );
};
