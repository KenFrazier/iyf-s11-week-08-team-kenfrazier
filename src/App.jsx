import UserCard from './components/User/UserCard';
import './App.css';

function App() {
  const sampleUser = {
    id: 1,
    name: "Frazier Kennedy",
    bio: "Team Lead, Nairobi"
  };

  return (
    <div className="app">
      <h1>CommunityHub</h1>
      <UserCard user={sampleUser} />
    </div>
  );
}

export default App;
