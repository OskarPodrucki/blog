import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
	const {
		data: blogs,
		isPending,
		error,
	} = useFetch("http://localhost:8000/blogs");

	return (
		<div className='home'>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title='All Blogs:' />}
		</div>
	);
};

export default Home;

// http://localhost:8000/
// npx json-server --watch data/db.json --port 8000
