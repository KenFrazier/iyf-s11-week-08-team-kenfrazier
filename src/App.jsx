import { useState } from 'react';
import UserCard from './components/User/UserCard';
import UserProfile from './components/User/UserProfile';
import Postlist from './components/Posts/Postlist';
import CreatePost from './components/Posts/CreatePost';
import PostDetail from './components/Posts/PostDetail';
import './App.css';

import { Routes, Route } from 'react-router-dom';

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to the Community",
      content: "This is a simple community forum where you can share your thoughts and connect with others."
    },
    {
      id: 2,
      title: "Community clean-up event",
      content: "Join us for a community clean-up event this Saturday. Help us keep our neighborhood beautiful!"
    },
    {
      id: 3,
      title: "Water shortage in the area",
      content: "There is a water shortage in the area that is affecting the community. We need to work together to find a solution and ensure everyone has access to clean water."
    }
  ]);

  const sampleUser = {
    id: 1,
    name: "Frazier Kennedy",
    bio: "Team Lead, Nairobi",
    location: "Nairobi, Kenya",
    avatar: "https://i.pravatar.cc/150?img=1"
  };

  return (
    <Routes>

      {/* Home page */}
      <Route
        path="/"
        element={
          <div className="App">
            <h1>Welcome to the Community</h1>
            <UserCard user={sampleUser} />
            <UserProfile user={sampleUser} />
          </div>
        }
      />

      {/* Posts page */}
      <Route
        path="/posts"
        element={<Postlist posts={posts} />}
      />

      {/* Create Post page */}
      <Route
        path="/posts/create"
        element={<CreatePost setPosts={setPosts} />}
      />

      {/* Post Detail page */}
      <Route
        path="/posts/:id"
        element={<PostDetail posts={posts} />}
      />

    </Routes>
  );
}

export default App;
