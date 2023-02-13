import { useState } from 'react';

export function useForm<T>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const reset = () => setValues(inputValues);

  return {
    values,
    handleChange,
    setValues,
    reset,
  };
}
