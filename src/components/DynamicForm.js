import React, { useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([{ name: '', age: '' }]);

  const handleAddField = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="field-container">
          <label htmlFor={`name-${index}`}>Name:</label>
          <input
            type="text"
            id={`name-${index}`}
            name={`name-${index}`}
            value={field.name}
            onChange={(event) => {
              const newFields = [...fields];
              newFields[index].name = event.target.value;
              setFields(newFields);
            }}
            required
          />
          <label htmlFor={`age-${index}`}>Age:</label>
          <input
            type="number"
            id={`age-${index}`}
            name={`age-${index}`}
            value={field.age}
            onChange={(event) => {
              const newFields = [...fields];
              newFields[index].age = event.target.value;
              setFields(newFields);
            }}
            required
          />
          <button type="button" onClick={() => handleRemoveField(index)}>-</button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>+</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;