import React from "react";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      contacts: [
        {
          id: uuid(),
          name: "",
          email: ""
        }
      ]
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  const handleNewField = () => {
    formik.setFieldValue("contacts", [
      ...formik.values.contacts,
      { id: uuid(), name: "", email: "" }
    ]);
  };

  const handleRemoveField = id => {
    formik.setFieldValue(
      "contacts",
      formik.values.contacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {formik.values.contacts.map((contact, index) => (
          <div key={contact.id}>
            <label>Name</label>
            <input {...formik.getFieldProps(`contacts[${index}].name`)} />
            <label>Email</label>
            <input {...formik.getFieldProps(`contacts[${index}].email`)} />
            <button type="button" onClick={() => handleRemoveField(contact.id)}>
              Delete
            </button>
          </div>
        ))}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleNewField}>
          Add Field
        </button>
      </form>
    </div>
  );
}

export default App;
