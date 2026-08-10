function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>CommunityHub</h1>
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <a href="#">About</a>
      </nav>

      <button className="login-button">Login</button>
    </header>
  );
}

export default Header;