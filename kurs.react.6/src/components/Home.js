const Home = () => {

	const handleClick = (e) => {
		console.log("nosiema", e)
	}

	const handleClickAgain = (name, e) => {
		console.log('nosiema ' + name, e.target)
	}

	return (
		<div className='home'>
			<h2>Homepage</h2>
			<button onClick={handleClick}>Click me</button>
			<button onClick={(e) => {
				handleClickAgain('oskar', e)
			}}>Click me again</button>
		</div>
	);
};

export default Home;
