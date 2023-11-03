import { Outlet, Link } from "react-router-dom";
import '../css/layout.css';

function layout() {
    const isLoggedIn = localStorage.getItem('token') !== null;
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }
    return (
        <div className="layout-container">
          <nav id="Links">
            <div className="rigth-part">
              <Link to="/">Home</Link>
              {isLoggedIn && <Link to="/addPayment">Add Payment</Link>}
              {isLoggedIn && <Link to="/pageGraph">Graphical exchanges</Link>}
            </div>
            <div className="left-part">
              {!isLoggedIn && <Link to="/login">Login</Link>}
              {!isLoggedIn && <Link to="/register">Register</Link>}
              {isLoggedIn && <Link to="/" onClick={logout}>Logout</Link>}
            </div>
          </nav>
          <Outlet />
        </div>
    );
}

export default layout;