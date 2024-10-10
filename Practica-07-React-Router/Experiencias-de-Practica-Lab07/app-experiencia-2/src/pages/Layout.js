import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/component1">Componente 1</Link></li>
          <li><Link to="/user">Usuario</Link></li>
          <li><Link to="/change-user">Cambiar usuario</Link></li>
          <li><Link to="/show-theme">Mostrar tema</Link></li>
          <li><Link to="/toggle-theme">Cambiar tema</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;