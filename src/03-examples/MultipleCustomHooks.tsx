import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

interface Pokemon {
  name: string;
  id: number;
  sprites: Record<string, string | null>;
}

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Informacion Pokemon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        data && (
          <PokemonCard
            name={data?.name}
            id={data?.id}
            sprites={[
              data.sprites.front_default,
              data.sprites.back_default,
              data.sprites.front_shiny,
              data.sprites.back_shiny,
            ].filter((item) => item !== null)}
          />
        )
      )}
      {hasError && <p>Ocurrió un error al cargar los datos.</p>}

      {/* {!isLoading && data && <h2>{data?.name}</h2>} */}

      <button
        onClick={() => (counter > 1 ? decrement() : null)}
        className="btn btn-primary mt-2"
      >
        Anterior
      </button>
      <button onClick={() => increment()} className="btn btn-primary mt-2">
        Siguiente
      </button>
    </>
  );
};
