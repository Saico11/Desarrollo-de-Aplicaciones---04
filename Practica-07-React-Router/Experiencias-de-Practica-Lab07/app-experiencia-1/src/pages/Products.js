import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="card">
      <div>
        <input type="search" placeholder="Search products" />
      </div>
      <nav>
        <Link to="featured">Featured Products</Link>
        <Link to="new">New Products</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
