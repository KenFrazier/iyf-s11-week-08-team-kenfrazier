import UserCard from './components/User/UserCard';
import UserProfile from './components/User/UserProfile';
import './App.css';

function App() {
  const sampleUser = {
    id: 1,
    name: "Frazier Kennedy",
    bio: "Team Lead, Nairobi",
    location: "Nairobi, Kenya",
    avatar: "https://i.pravatar.cc/150?img=1"
  };

  return (
    <div className="app">
      <h1>CommunityHub</h1>
      <UserCard user={sampleUser} />
      <UserProfile user={sampleUser} />
    </div>
  );
}

export default App;
