import { useFetch } from '../hooks';

interface Pokemon {
  name: string;
}

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetch<Pokemon>(
    'https://pokeapi.co/api/v2/pokemon/3'
  );
  return (
    <>
      <h1>Informacion Pokemon</h1>
      <hr />

      {isLoading && <p>Cargando...</p>}
      {hasError && <p>Ocurrió un error al cargar los datos.</p>}

      {!isLoading && data && <h2>{data?.name}</h2>}
    </>
  );
};
