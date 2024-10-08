import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <div className="card">
      <h1>Categories</h1>
      <nav>
        <li><Link to="tecnology">Tecnology</Link></li>
        <li><Link to="cleaning">Cleaning</Link></li>
      </nav>
      <Outlet />
    </div>
  );
};

export default Categories;
