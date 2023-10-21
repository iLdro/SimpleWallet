import { Outlet, Link } from "react-router-dom";

const layout = () => {
    return (
        <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/addPayment">Add Payment</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
        <Outlet />
        </div>
    );
}

export default layout;