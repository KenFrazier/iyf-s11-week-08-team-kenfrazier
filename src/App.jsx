import UserCard from './components/User/UserCard';
import UserProfile from './components/User/UserProfile';
import Postlist from './components/Posts/Postlist';
import './App.css';

import { Routes, Route } from 'react-router-dom';

function App() {
  const sampleUser = {
    id: 1,
    name: "Frazier Kennedy",
    bio: "Team Lead, Nairobi",
    location: "Nairobi, Kenya",
    avatar: "https://i.pravatar.cc/150?img=1"
  };

  return (
    <Routes>
      {/* Home page*/}
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
        element={<Postlist/>}
      />

    </Routes>
  );
}

export default App;
