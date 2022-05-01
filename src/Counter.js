import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count+1)

	return (
		<div>
			<h2>You Clicked: {count} Times</h2>
			<button onClick={increment}>Add</button>
		</div>
	);
}

export default Counter;