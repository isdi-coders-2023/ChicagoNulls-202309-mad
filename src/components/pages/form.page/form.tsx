import React, { useState } from 'react';
import {} from './form.style.scss';
export const Form = () => {
  const [values, setValues] = useState({
    name: '',

    level: '',

    mind: '',

    vigor: '',

    strength: '',

    classType: 'Human',

    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,

      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Form Api</h2>

        <input
          type="text"
          name="name"
          placeholder="Ingresa el nombre"
          value={values.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Ingresa la descripción"
          value={values.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="level"
          placeholder="Ingresa el nivel"
          value={values.level}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mind"
          placeholder="Ingresa el mind"
          value={values.mind}
          onChange={handleChange}
        />

        <input
          type="text"
          name="vigor"
          placeholder="Ingresa el vigor"
          value={values.vigor}
          onChange={handleChange}
        />

        <input
          type="text"
          name="strength"
          placeholder="Ingresa el valor de Strength"
          value={values.strength}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
