import { useState } from "react";

function SecondUser() {
	const [counter, setCounter] = useState(0);
	const increment = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<h1>User2 Data Here</h1>
			<button onClick={increment}>Click Me</button>
			<p>You clicked the button {counter} times</p>
		</div>
	);
}
function ThirdUser() {
	return (
		<div>
			<h1>User3 Data Here</h1>
		</div>
	);
}

export { SecondUser, ThirdUser };
