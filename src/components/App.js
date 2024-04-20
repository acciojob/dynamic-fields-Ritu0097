import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "",
      email: ""
    }
  ]);

  const handleNewField = () => {
    setContacts(prevContacts => [
      ...prevContacts,
      { id: prevContacts.length + 1, name: "", email: "" }
    ]);
  };

  const handleRemoveField = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleInputChange = (id, field, value) => {
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.id === id ? { ...contact, [field]: value } : contact
      )
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(contacts);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {contacts.map(contact => (
          <div key={contact.id}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={e => handleInputChange(contact.id, "name", e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={e => handleInputChange(contact.id, "email", e.target.value)}
            />
            <button type="button" onClick={() => handleRemoveField(contact.id)}>
              Delete
            </button>
          </div>
        ))}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleNewField}>
          Add More..
        </button>
      </form>
    </div>
  );
}

export default App;
