import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2>Details about users: {name}</h2>
      <h4 style={{ color: "red", fontSize: "20px" }}>Website: {website}</h4>
    </div>
  );
};

export default UserDetails;
