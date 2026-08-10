function Sidebar() {
  const popularPosts = [
    "How to Learn React",
    "Best JavaScript Resources",
    "Getting Started with GitHub",
  ];

  const tags = [
    "React",
    "JavaScript",
    "Programming",
    "Web Development",
    "Career",
  ];

  return (
    <aside className="sidebar">
      <section>
        <h3>About CommunityHub</h3>
        <p>
          CommunityHub is a place where developers and technology
          enthusiasts can share ideas, knowledge, and experiences.
        </p>
      </section>

      <section>
        <h3>Popular Posts</h3>

        <ul>
          {popularPosts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Tags</h3>

        <div className="tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;