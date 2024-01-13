import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const {
		data: blog,
		isPending,
		error,
	} = useFetch("http://localhost:8000/blogs/" + id);
	const navigate = useNavigate();

	const handleDelete = () => {
		fetch("http://localhost:8000/blogs/" + blog.id, {
			method: "DELETE",
		}).then(() => {
			alert("blog deleted");
			navigate("/");
		});
	};

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
					<button onClick={handleDelete}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
