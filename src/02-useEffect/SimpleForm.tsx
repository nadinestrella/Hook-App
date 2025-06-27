import { useEffect, useState } from 'react';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Nadine',
    email: 'nadine@nadine.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      // propiedades computadas de los objetos entre []
      [name]: value,
    });
  };

  useEffect(() => {
    console.log('email chanaged');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="usename"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="nadine@nadine.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
