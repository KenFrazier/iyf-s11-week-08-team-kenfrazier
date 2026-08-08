function UserProfile({ user }) {
  return (
    <div className="user-profile">
      {user.avatar && <img src={user.avatar} alt={user.name} />}
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>{user.location}</p>
    </div>
  );
}

export default UserProfile;
