import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const {
		data: blog,
		isPending,
		error,
	} = useFetch("http://localhost:8000/blogs/" + id);

	return (
		<div className='blog-details'>
			<h1>Blog id - {id}</h1>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2> {blog.title && blog.title} </h2>
					<p> Written by {blog.author && blog.author} </p>
					<div> {blog.body && blog.body} </div>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
