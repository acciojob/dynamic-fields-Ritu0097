import React, { useState } from 'react';

function DynamicForm() {
  const [fields, setFields] = useState([{ name: '', age: '' }]);

  const handleAddField = () => {
    setFields([...fields, { name: '', age: '' }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...fields];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
    // You can perform further actions like sending the data to a server here
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <button type="button" onClick={() => handleRemoveField(index)}>
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
}

export default DynamicForm;
