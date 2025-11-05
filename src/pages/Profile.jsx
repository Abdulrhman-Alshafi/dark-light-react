import { useNotify } from "../hooks/useNotify";
import { useUser } from "../hooks/useUser";

const Profile = () => {
  const { user } = useUser();
  const { notify } = useNotify();
  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <button onClick={() => notify("Profile updated!")}>Update Profile</button>
    </div>
  );
};
export default Profile;
