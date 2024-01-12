import { useState } from "react";

const Home = () => {
	// let name = 'oskar'
	const [name, setName] = useState("oskar");
	const [age, setAge] = useState(16);

	const handleClick = () => {
		setName("aha");
		console.log(name);
		setAge(100);
		console.log(age);
	};

	return (
		<div className='home'>
			<h2>Homepage</h2>
			<p>
				{name} is {age} years old
			</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
};

export default Home;
