import React, { useState } from 'react';

const DynamicForm = () => {
  const [fields, setFields] = useState([
    { id: 1, name: '', age: '' },
  ]);

  const handleAddField = () => {
    setFields([...fields, { id: fields.length + 1, name: '', age: '' }]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleInputChange = (id, field,event) => {
    const newFields = fields.map((f) => (f.id === id ? { ...f, [field]: event.target.value } : f));
    setFields(newFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.id}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={field.name}
              onChange={(event) => handleInputChange(field.id, 'name',event)}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={field.age}
              onChange={(event) => handleInputChange(field.id, 'age',event)}
            />
          </label>
          <button type="button" onClick={() => handleRemoveField(field.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
      Add More..
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};
export default DynamicForm;