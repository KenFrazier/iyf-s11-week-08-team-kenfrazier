import { useParams, Link } from "react-router-dom";

function PostDetail({ posts }) {
    const { id } = useParams();

    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}


export default PostDetail;