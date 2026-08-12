import { Link } from "react-router-dom";

function Postlist({ posts }) {
    return (
        <div>
            <h2>Posts</h2>

            <Link to="/posts/create">
                <button>Create Post</button>
            </Link>

            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>

                    <Link to={`/posts/${post.id}`}>View Post</Link>
                </div>
            ))}
        </div>
    );
}

export default Postlist;