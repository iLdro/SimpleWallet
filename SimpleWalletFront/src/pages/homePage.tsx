
import Layout from "./layout";
import { Outlet, Link } from "react-router-dom";
import '../css/homePage.css'

function HomePage() {

    const isLoggedIn = localStorage.getItem('token') !== null;
    
    return (
        <div>
            <Layout/>
            <div className="text">
                <h1>Home Page</h1>
                <p>Welcome to our innovative platform where convenience meets financial insight! With our user-friendly interface, you can seamlessly log in and securely process payments on our advanced servers. </p>
                <p>Whether you're managing your personal finances or overseeing business transactions, our system ensures swift and secure payment processing. But that's not all - we go the extra mile by providing intuitive graphical representations of your payment data. Our interactive graphs and charts empower you to visualize your financial trends, enabling better decision-making and strategic planning.</p> 
                <p>Join us now to experience the future of hassle-free transactions and gain valuable insights into your financial journey. Start making informed choices today!</p>
            </div>  
            <div className="button-container">
                {!isLoggedIn && <Link to="/login">Login</Link>}
                {!isLoggedIn && <Link to="/register">Register</Link>}
                {isLoggedIn && <Link to="/addPayment">Add Payment</Link>}
                {isLoggedIn && <Link to="/pageGraph">Graphical exchanges</Link>}
                <Outlet />
            </div>
        </div>
    )
}

export default HomePage;