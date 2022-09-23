import { useState } from "react";

function Form() {
	const [form, setForm] = useState({ name: "", email: "" });
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form submitted");
		console.log(form);
	};
	const onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		console.log(`event.target.name: ${name}, event.target.value: ${value}`);

		setForm({ ...form, [name]: value });
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="name" onChange={onChange} />
			<input type="email" name="email" onChange={onChange} />
			<button type="submit">Submit Form</button>
		</form>
	);
}

export default Form;
