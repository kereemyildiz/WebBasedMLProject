import React, { useState } from "react";

function Data() {
	const [user, setUser] = useState(null);

	const getData = () => {
		setDefaultTextAppear(false);
		fetch("https://randomuser.me/api/")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setUser(data.results[0]);
			});
	};
	const [defaultTextAppear, setDefaultTextAppear] = useState(true);

	return (
		<div>
			<button onClick={getData}> Fetch Data</button>
			{!user ? (
				<p>User Not Found</p>
			) : (
				<p>
					{user.name.first} {user.name.last} - {user.email}
				</p>
			)}
		</div>
	);
}

export default Data;
