import { useState } from "react";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("New Post:", {
            title,
            content,
        });

        setTitle("");
        setContent("");
    };

    return (
        <div>
            <h2>Create a Post</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter post title"
                    />
                </div>

                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your post ..."
                    />
                </div>

                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;