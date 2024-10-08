import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="card">
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />
    </div>
  );
};

export default Users;
