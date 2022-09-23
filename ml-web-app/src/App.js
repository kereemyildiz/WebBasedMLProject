import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import { SecondUser, ThirdUser } from "./OtherUser";
import Form from "./Form";
import Data from "./Data";

function App() {
	const name = "Kerem";
	const age = "23";

	const clickMe = () => {
		console.log("I got clicked!");
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Data />
				{/* <User name={name} age={age} function={clickMe} />
				<SecondUser />
				<ThirdUser /> */}
				<Form />
			</header>
		</div>
	);
}

export default App;
