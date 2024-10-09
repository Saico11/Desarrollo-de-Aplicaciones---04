import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/component1">Component 1</Link></li>
          <li><Link to="/component2">Component 2</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;