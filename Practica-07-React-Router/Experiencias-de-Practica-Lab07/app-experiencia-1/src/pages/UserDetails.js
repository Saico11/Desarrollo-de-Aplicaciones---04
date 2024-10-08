import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  return <h1>Details of user {userId}</h1>;
};

export default UserDetails;
