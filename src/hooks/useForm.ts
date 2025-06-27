import { useState } from 'react';

export const useForm = <T extends Record<string, any>>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      // propiedades computadas de los objetos entre []
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
