function User(props) {
	console.log(props);
	return (
		<div>
			<h1>
				Name: {props.name} Age: {props.age}
				<button onClick={props.function}>Click Me</button>
			</h1>
		</div>
	);
}

export default User;
