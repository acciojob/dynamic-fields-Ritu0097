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

  const handleChange = (index, name) => (e) => {
    const value = e.target.value;
    setFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index][name] = value;
      return updatedFields;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <label>
              Name:
              <input type="text" name="name" value={field.name} onChange={(e) => handleChange(index, 'name')(e)}/>
            </label>
            <label>
              Age:
              <input type="number" name="age" value={field.age} onChange={(e) => handleChange(index, 'age')(e)}/>
            </label>
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add More..
        </button>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;