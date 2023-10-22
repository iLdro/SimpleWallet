import { Outlet, Link } from "react-router-dom";
import '../css/layout.css';
const layout = () => {
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
            <Link to="/addPayment">Add Payment</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/pageGraph">Graphical exchanges</Link>
        </nav>
        <Outlet />
        </div>
    );
}

export default layout;