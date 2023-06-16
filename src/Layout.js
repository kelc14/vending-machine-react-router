import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Outlet />
      <nav className="Layout-nav">
        {/* <Link to="/">Home</Link> */}

        <Link to="/apple">Apple</Link>

        <Link to="/airhead">Airhead</Link>

        <Link to="/milkyway">Milkyway</Link>
      </nav>
    </>
  );
};

export default Layout;
