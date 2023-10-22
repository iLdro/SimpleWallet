import { Outlet, Link } from "react-router-dom";

const layout = () => {
    const isLoggedIn = localStorage.getItem('token') !== null;
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            
            marginTop: "3em",
            marginBottom: "3em", 
        }}>
      
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/addPayment">Add Payment</Link>}
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && <Link to="/register">Register</Link>}
        {isLoggedIn && <Link to="/pageGraph">Graphical exchanges</Link>}
        {isLoggedIn && <Link to="/" onClick={logout}>Logout</Link>}
      </nav>
        <Outlet />
        </div>
    );
}

export default layout;