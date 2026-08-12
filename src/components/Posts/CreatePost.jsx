import { useState } from "react";
import { Link } from "react-router-dom";

function CreatePost({ setPosts }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            content: content
        };

        setPosts((currentPosts) => [...currentPosts, newPost]);

        setTitle("");
        setContent("");
    }

    return (
        <div>
            <h2>Create a Post</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Enter post title"
                    />
                </div>
                <br />

                <div>
                    <label htmlFor="content">Content</label>
                    <br />
                    <textarea
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        placeholder="Write your post ..."
                    />
                </div>

                <button type="submit">Create Post</button>
            </form>

            <br />

            <Link to="/posts">
                <button>Back to Posts</button>
            </Link>
        </div>
    );
}

export default CreatePost;