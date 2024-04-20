import React, { useState } from 'react'

const App = () => {
	const [fields, setFields] = useState([{ name: '', age: '' }])

	const handleFieldChange = (index, event) => {
		const values = [...fields]
		values[index][event.target.name] = event.target.value
		setFields(values)
	}

	const addField = () => {
		setFields(...fields, { name: '', age: '' })
	}

	const removeField = (index) => {
		const values = [...fields]
		values.splice(index, 1)
		setFields(values)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(fields)
	}

	return (
		<form onSubmit={handleSubmit}>
			{fields.map((field, index) => (
				<div key={index} className="field">
					<label htmlFor={`name-${index}`}></label>
					<input
						type="text"
						id={`name-${index}`}
						name="name"
						value={field.name}
						onChange={(event) => handleFieldChange(index, event)}
						placeholder="Name"
						required
					/>
					<label htmlFor={`age-${index}`}></label>
					<input
						type="number"
						id={`age-${index}`}
						name="age"
						value={field.age}
						onChange={(event) => handleFieldChange(index, event)}
						placeholder="Age"
						required
					/>
					<button type="button" onClick={() => removeField(index)}>
						Remove
					</button>
				</div>
			))}
			<button type="button" onClick={addField}>
				Add More..
			</button>
			<button type="submit">Submit</button>
		</form>
	)
}

export default App
