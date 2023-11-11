import React, { useState } from 'react';

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
  console.log(Form());

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

    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} role="form">
        <h1>Form Api</h1>

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
